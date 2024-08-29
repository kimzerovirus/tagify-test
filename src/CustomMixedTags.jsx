import React, { useCallback, useState } from "react";
import { MixedTags } from "@yaireo/tagify/dist/react.tagify";

const settings = {
  mode: "mix",
  pattern: /@/, // <- must define "patten" in mixed mode
  enforceWhitelist: true, // 화이트리스트에서 허용된 태그만 사용 // <<< 이거 하면 다 안되네..
  dropdown: {
    enabled: 0,
    position: "text",
    userInput: true,
    includeSelectedTags: true,
  },
  duplicates: true,
  trim: true,
  closeOnSelect: true,
  // whitelist // <- 일반적인 jquery 사용법에서는 settings에서 설정하면 되지만
  // react component 사용시에는 무조건 react props로 넘기는 쪽이 있다면 해당 부분만 정상 작동 되는것 같음
};

const whitelist = [
  { id: 100, value: "kenny", title: "Kenny McCormick" },
  { id: 101, value: "cartman", title: "Eric Cartman" },
  { id: 102, value: "kyle", title: "Kyle Broflovski" },
  { id: 103, value: "token", title: "Token Black" },
  { id: 104, value: "jimmy", title: "Jimmy Valmer" },
  { id: 105, value: "butters", title: "Butters Stotch" },
  { id: 106, value: "stan", title: "Stan Marsh" },
  { id: 107, value: "randy", title: "Randy Marsh" },
  { id: 108, value: "Mr. Garrison", title: "POTUS" },
  { id: 109, value: "Mr. Mackey", title: "M'Kay" },
];

const CustomMixedTags = () => {
  const onChange = useCallback((e) => {
    console.log("CHANGED:", e.detail.value);
  }, []);

  return (
    <>
      <MixedTags
        whitelist={whitelist}
        autoFocus={true}
        settings={settings}
        className="myTags"
        onChange={onChange}
        value={`
This is a textarea which mixes text with [[{"value":"tags"}]].
To add a [[{"value":"tag"}]], type <em>@</em> and a (Latin) character. Here's a [[{"value":"readonly", "readonly":true}]] tag.
<br>
<small>(Only tags from the <em>whitelist</em> are allowed. <em>Whitelist</em> contains names of Southpark characters.)</small
<br>
<small>(Open this demo in a full-window to be able to type new-line returns)</small>
[[{ "id": 100, "value": "kenny", "title": "Kenny McCormick" }]]
 시작시에 테그가 적용 되려면 해당 태그가 화이트리스트에 일단 존재해야함
        `}
      />
    </>
  );
};

export default CustomMixedTags;
