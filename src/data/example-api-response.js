export default {
  callDetails: {
    headingPrefix: "Call with",
    headingText: "Niloya Kayıkçı",
    metaItems: [
      { icon: "fill-calendar", text: "7 Oct, Weds" },
      { icon: "fill-clock", text: "10:15AM - 10:30AM" }
    ],
    timezone: "Timezone: Europe/Amsterdam"
  },
  videoPreview: {
    image: {
      src: "/images/video-preview.jpg",
      srcset:
        "/images/video-preview@2x.jpg 2x, /images/video-preview@3x.jpg 3x, /images/video-preview@4x.jpg 4x",
      alt: "Niloya Kayıkçı's video preview"
    },
    inputValue: "Adem İlter"
  },
  form: {
    submit: function() {
      alert("Submit!");
    },
    fields: [
      {
        label: "Camera",
        name: "camera",
        type: "select",
        options: [
          {
            value: "",
            text: "Choose..."
          },
          {
            value: "1",
            text: "Facetime HD Camera"
          },
          {
            value: "2",
            text: "Other Camera"
          }
        ],
        value: "1"
      },
      {
        label: "Speaker",
        name: "speaker",
        type: "select",
        state: "error",
        options: [
          {
            value: "",
            text: "Choose..."
          },
          {
            value: "1",
            text: "Built-in Output (Headphone)"
          },
          {
            value: "2",
            text: "Speakers (High Definition Audio Device)"
          }
        ],
        value: "1"
      },
      {
        label: "Microphone",
        name: "microphone",
        type: "select",
        state: "success",
        disabled: true,
        options: [
          {
            value: "",
            text: "Choose..."
          },
          {
            value: "1",
            text: "Built-in Microphone (Elorem Ipsum)"
          },
          {
            value: "2",
            text: "Other Microphone (Dolor Sit Amet)"
          }
        ],
        value: "1"
      },
      {
        label: "Sound Test",
        name: "sound",
        type: "button",
        buttonText: "Play Sound",
        buttonClick: function() {
          alert("Beep!");
        }
      }
    ]
  },
  submitText: "Join Call"
};
