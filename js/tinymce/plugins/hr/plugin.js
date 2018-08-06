(function () {
var hr = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('InsertHorizontalRule', function () {
      editor.execCommand('mceInsertContent', false, '<hr />');
    });
  };
  var $_5u6hoxc7ji394igi = { register: register };

  var register$1 = function (editor) {
    editor.addButton('hr', {
      icon: 'hr',
      tooltip: 'Horizontal line',
      cmd: 'InsertHorizontalRule'
    });
    editor.addMenuItem('hr', {
      icon: 'hr',
      text: 'Horizontal line',
      cmd: 'InsertHorizontalRule',
      context: 'insert'
    });
  };
  var $_6kew4dc8ji394igj = { register: register$1 };

  global.add('hr', function (editor) {
    $_5u6hoxc7ji394igi.register(editor);
    $_6kew4dc8ji394igj.register(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
