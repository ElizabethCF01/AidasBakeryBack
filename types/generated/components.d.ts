import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'dashboard';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.link': SharedLink;
    }
  }
}
