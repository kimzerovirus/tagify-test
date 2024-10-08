const whitelist_1 = [
  { value: 1, text: "테스터1", title: "테스트 제목1" },
  { value: 2, text: "테스터2", title: "테스트 제목2" },
  { value: 3, text: "테스터3", title: "테스트 제목3" },
];

const whitelist_2 = [
  { value: 11, text: "테스터11", title: "테스트 제목11" },
  { value: 12, text: "테스터12", title: "테스트 제목12" },
  { value: 13, text: "테스터13", title: "테스트 제목13" },
];

const input = document.querySelector("[name=mix]"),
  tagify = new Tagify(input, {
    mode: "mix",
    pattern: /@|#/,
    tagTextProp: "text",
    whitelist: whitelist_1.concat(whitelist_2),

    // custom validation
    validate(data) {
      return !/[^a-zA-Z0-9 ]/.test(data.value);
    },

    dropdown: {
      enabled: 1,
      position: "text",
      mapValueTo: "text",
      highlightFirst: true,
    },

    callbacks: {
      add: console.log,
      remove: console.log,
    },
  });

tagify.on("input", function (e) {
  const prefix = e.detail.prefix;

  if (prefix) {
    if (prefix == "@") tagify.whitelist = whitelist_1;

    if (prefix == "#") tagify.whitelist = whitelist_2;

    if (e.detail.value.length > 1) tagify.dropdown.show(e.detail.value);
  }

  console.log(tagify.value);
  console.log('mix-mode "input" event value: ', e.detail);
});

tagify.on("add", function (e) {
  console.log(e);
});
