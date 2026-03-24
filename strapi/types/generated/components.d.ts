import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedStats extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    appointments: Schema.Attribute.Integer;
    doctors: Schema.Attribute.Integer;
    patients: Schema.Attribute.Integer;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    feedback: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.hero': SharedHero;
      'shared.stats': SharedStats;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
