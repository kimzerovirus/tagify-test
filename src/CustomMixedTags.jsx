import React, { useCallback, useState } from "react";
import { MixedTags } from "@yaireo/tagify/dist/react.tagify";

const settings = {
  pattern: /@/, // <- must define "patten" in mixed mode
  //   enforceWhitelist: true, // 화이트리스트에서 허용된 태그만 사용 // <<< 이거 하면 다 안되네..
  dropdown: {
    enabled: 1,
    position: "text",
  },
  whitelist: [
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
  ],
};

const CustomMixedTags = () => {
  const onChange = useCallback((e) => {
    console.log("CHANGED:", e.detail.value);
  }, []);

  return (
    <>
      <MixedTags
        autoFocus={true}
        settings={settings}
        className="myTags"
        readOnly={false}
        onChange={onChange}
        value={`
      type <em>@</em> and a (Latin) character.
      <br>
      <small>(Only tags from the <em>whitelist</em> are allowed. <em>Whitelist</em> contains names of Southpark characters.)</small
      <br>
      <small>(Open this demo in a full-window to be able to type new-line returns)</small>
              `}
      />
    </>
  );
};

export default CustomMixedTags;
