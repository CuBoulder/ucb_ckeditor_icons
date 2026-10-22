import { Plugin } from 'ckeditor5/src/core';
import type { PluginInterface } from '@ckeditor/ckeditor5-core/src/plugin';

/**
 * Integration with the external `LinkEditing` plugin. Allows icons to become
 * links by adding `linkHref` to the model as an allowed attribute.
 */
export default class IconLinkEditing extends Plugin implements PluginInterface {
  /**
   * The plugin's name in the PluginCollection.
   */
  static get pluginName(): 'IconLinkEditing' {
    return 'IconLinkEditing' as const;
  }

  /**
   * @inheritdoc
   */
  init() {
    const { editor } = this;

    if (!editor.plugins.has('LinkEditing')) {
      // Nothing to integrate with.
      return;
    }

    editor.model.schema.extend('icon', {
      allowAttributes: ['linkHref']
    });

    // Linkit stores `data-entity-*` link attributes as separate model
    // attributes. If the icon lacks them, its link can't merge with the link
    // on the adjacent text and the link gets split into two `<a>` elements.
    if (editor.plugins.has('LinkitEditing')) {
      editor.model.schema.extend('icon', {
        allowAttributes: ['linkDataEntityType', 'linkDataEntityUuid', 'linkDataEntitySubstitution']
      });
    }
  }
}
