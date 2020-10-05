/**
 * Vue version of @svgr/cli
 * Optimize and Export SVG Files as Vue Components.
 *
 * Author: @hayatbiralem (Ömür Yanıkoğlu)
 *
 * Help  : node tasks/svgv.js --help
 * Usage : node tasks/svgv.js -s [source dir] -t [target dir]
 */

var fs = require("fs");

var argv = require("yargs") // eslint-disable-line
  .usage("Usage: node tasks/$0 -s [source path] -t [target path]")
  .usage("Usage: node tasks/$0 --source=[source path] --target=[target path]")
  .option("source", {
    alias: "s",
    type: "string",
    description: "Source path"
  })
  .option("target", {
    alias: "t",
    type: "string",
    description: "Target path"
  })
  .option("json", {
    alias: "j",
    type: "string",
    description: "Target JSON path to store icons list as string array"
  })
  .default("s", "./src/icons")
  .default("t", "./dist/icons")
  .default("j", "./dist/icons.js").argv;

var rimraf = require("rimraf");
var camelCase = require("camelcase");
const pascalCase = str => {
  return camelCase(str, { pascalCase: true });
};
var basename = require("basename");
var SVGO = require("svgo/lib/svgo");
var svgo = new SVGO({
  plugins: [
    {
      cleanupAttrs: true
    },
    {
      removeDoctype: true
    },
    {
      removeXMLProcInst: true
    },
    {
      removeComments: true
    },
    {
      removeMetadata: true
    },
    {
      removeTitle: true
    },
    {
      removeDesc: true
    },
    {
      removeUselessDefs: true
    },
    {
      removeEditorsNSData: true
    },
    {
      removeEmptyAttrs: true
    },
    {
      removeHiddenElems: true
    },
    {
      removeEmptyText: true
    },
    {
      removeEmptyContainers: true
    },
    {
      removeViewBox: false
    },
    {
      cleanupEnableBackground: true
    },
    {
      convertStyleToAttrs: true
    },
    {
      convertColors: true
    },
    {
      convertPathData: true
    },
    {
      convertTransform: true
    },
    {
      removeUnknownsAndDefaults: true
    },
    {
      removeNonInheritableGroupAttrs: true
    },
    {
      removeUselessStrokeAndFill: true
    },
    {
      removeUnusedNS: true
    },
    {
      cleanupIDs: true
    },
    {
      cleanupNumericValues: true
    },
    {
      moveElemsAttrsToGroup: true
    },
    {
      moveGroupAttrsToElems: true
    },
    {
      collapseGroups: true
    },
    {
      removeRasterImages: false
    },
    {
      mergePaths: true
    },
    {
      convertShapeToPath: true
    },
    {
      sortAttrs: true
    },
    {
      removeDimensions: true
    },
    {
      removeAttrs: { attrs: "(stroke|fill)" }
    }
  ]
});

var source = argv.s;
var target = argv.t;
var json = argv.j;

// Source: https://gist.github.com/adamwdraper/4212319
var walk = function(dir, done) {
  fs.readdir(dir, function(error, list) {
    if (error) {
      return done(error);
    }

    list.forEach(function(item, index) {
      fs.appendFileSync(
        json,
        '  "' +
          pascalCase(item.replace(".svg", "")) +
          '"' +
          (index < list.length - 1 ? "," : "") +
          "\n",
        "utf8"
      );
    });

    var i = 0;

    (function next() {
      var file = list[i++];

      if (!file) {
        return done(null);
      }

      file = dir + "/" + file;

      fs.stat(file, function(error, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(error) {
            next();
          });
        } else {
          // do stuff to file here
          var fileName = basename(file);
          // console.log(fileName, file);
          fs.readFile(file, "utf8", function(err, data) {
            if (err) {
              throw err;
            }

            svgo.optimize(data, { path: file }).then(function(result) {
              // console.log(result.data);

              var fileNameCamelCase = pascalCase(fileName);
              var fileTo = target + "/" + fileNameCamelCase + ".vue";

              fs.writeFile(
                fileTo,
                "<template>\n%s\n</template>\n<script>\nexport default {};\n</script>".replace(
                  "%s",
                  result.data.replace(
                    "<svg ",
                    '<svg aria-hidden="true" width="1em" height="1em" '
                  )
                ),
                function(err) {
                  if (err) throw err;
                  console.log(file, "->", fileTo);
                  fs.appendFileSync(
                    target + "/index.js",
                    "export { default as " +
                      fileNameCamelCase +
                      ' } from "./' +
                      fileNameCamelCase +
                      '";' +
                      "\n",
                    "utf8"
                  );
                }
              );
            });
          });

          next();
        }
      });
    })();
  });
};

console.log("Scheduling...");

rimraf(target, function(err) {
  if (err) {
    throw err;
  }

  setTimeout(function() {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target);
    }

    fs.unlinkSync(json);
    fs.appendFileSync(json, "export default [\n", "utf8");

    walk(source, function(error) {
      if (error) {
        throw error;
      } else {
        console.log("Scheduled!");
        fs.appendFileSync(json, "];\n", "utf8");
      }
    });
  }, 300);
});
