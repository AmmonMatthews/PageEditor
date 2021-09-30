import React from "react";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import Context from "@ckeditor/ckeditor5-core/src/context";
// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

const NewCKEditor = () => {
  return (
    <div>
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      {/* <h2>Editor 2</h2>
      <CKEditorContext context={Context}>
        <h2>Using the CKeditor 5 context feature in React</h2>
        <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: [Paragraph, Bold, Italic, Essentials],
            toolbar: ["bold", "italic"],
          }}
          data="<p>Hello from the first editor working with the context!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor1 is ready to use!", editor);
          }}
        />

        <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: [Paragraph, Bold, Italic, Essentials],
            toolbar: ["bold", "italic"],
          }}
          data="<p>Hello from the first editor working with the context!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor1 is ready to use!", editor);
          }}
        />
      </CKEditorContext> */}
      {/* <h2>CKEditor 5 using a custom build - decoupled editor</h2>
                <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );

                        this.editor = editor;
                    } }
                    onError={ ( { willEditorRestart } ) => {
                        // If the editor is restarted, the toolbar element will be created once again.
                        // The `onReady` callback will be called again and the new toolbar will be added.
                        // This is why you need to remove the older toolbar.
                        if ( willEditorRestart ) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                    data="<p>Hello from CKEditor 5's decoupled editor!</p>"
                    config={ /* the editor configuration />*/}
    </div>
  );
};

export default NewCKEditor;
