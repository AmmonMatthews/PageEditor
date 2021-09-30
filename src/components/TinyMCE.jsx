import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyMCE() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(typeof editorRef.current.getContent());
    }
  };

  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };
  return (
    <div style={{ width: "50%", margin: "10% auto" }}>
      <Editor
        apiKey="18oa7nai0lyn2rx3ih2878gplnv47kxuxdwe5r52yvurj89a"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image imageupload imagetoolbar charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "link image  |" +
            "removeformat | fullscreen | help ",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onChange={handleEditorChange}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
}

// imagetools_cors_hosts: [
//             "cloudinary.com",
//             "shopify.com",
//             "res.cloudinary.com",
//           ],
//           imagetools_credentials_hosts: [
//             "cloudinary.com",
//             "shopify.com",
//             "res.cloudinary.com",
//           ],
