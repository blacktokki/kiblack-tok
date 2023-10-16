import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { EditorProps } from '../../types';
const INIT = require('../../../web/editor-config')
const PATH = process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'

export default (props:EditorProps) => {
	return <Editor
        tinymceScriptSrc={PATH}
        onInit={(e, editor) => {props.onReady?.()}}
        onEditorChange={props.setValue}
        init={{
          plugins: INIT.plugins,
          toolbar: INIT.toolbar,
          height: '100%',
          skin: props.theme=='light'?'oxide':'oxide-dark',
          content_css: props.theme=='light'?'default':'dark',
          menubar: false,
          branding: false,
          statusbar: false,
          block_formats: '제목1=h2;제목2=h3;제목3=h4;본문=p;',
          fontsize_formats: '11pt 14pt 18pt 24pt',
        }}
        value={props.value}
    />
};
