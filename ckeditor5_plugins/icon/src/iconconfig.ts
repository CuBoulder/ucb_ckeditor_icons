/**
 * @file defines configuration for the icon plugin.
 */

import type { FontAwesomeVersion, FontAwesomeStyle, SelectableOption, CategoryDefinitions, IconName, IconDefinition, IconDefinitionAlt } from './icontypes';
import objectSizeExtraSmall from '../../../icons/object-size-extra-small.svg';
import objectSizeSmall from '../../../icons/object-size-small.svg';
import objectSizeMedium from '../../../icons/object-size-medium.svg';
import objectSizeLarge from '../../../icons/object-size-large.svg';
import objectSizeFull from '../../../icons/object-size-full.svg';
import objectCenter from '../../../icons/object-center.svg';
import objectLeft from '../../../icons/object-left.svg';
import objectRight from '../../../icons/object-right.svg';

/**
 * The options available in `editor.config.get('icon')`.
 */
export interface IconConfig {
  toolbarItems: string[];
  faVersion: FontAwesomeVersion;
  faCategories?: CategoryDefinitions;
  faStyles?: FontAwesomeStyle[];
  faIcons?: { [key: string]: IconDefinition | IconDefinitionAlt };
  recommendedIcons?: IconName[] | null;
  customMetadata?: boolean;
  asyncMetadataURI: string;
};

export type ModelAttribute = 'iconFA' | 'iconStyle' | 'iconSize' | 'iconAlignment';

export type ModelAttributeDefinition<T extends string = string, A extends ModelAttribute = ModelAttribute> = [T, A];

// === Sizes ===
export type Size = 'extraSmall' | 'small' | 'regular' | 'large' | 'extraLarge' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
export type SizeAttributeDefinition = ModelAttributeDefinition<Size, 'iconSize'>;
export const sizeOptions: { [key in Size]: SelectableOption; } = {
  extraSmall: {
    label: 'Extra Small',
    icon: objectSizeExtraSmall,
    className: 'fa-xs'
  },
  small: {
    label: 'Small',
    icon: objectSizeSmall,
    className: 'fa-sm'
  },
  regular: {
    label: 'Regular',
    icon: objectSizeMedium
  },
  large: {
    label: 'Large',
    icon: objectSizeLarge,
    className: 'fa-lg'
  },
  extraLarge: {
    label: 'Extra Large',
    icon: objectSizeFull,
    className: 'fa-xl',
    compatibility: ['6']
  },
  '2x': {
    label: '2x',
    className: 'fa-2x'
  },
  '3x': {
    label: '3x',
    className: 'fa-3x'
  },
  '4x': {
    label: '4x',
    className: 'fa-4x'
  },
  '5x': {
    label: '5x',
    className: 'fa-5x'
  },
  '6x': {
    label: '6x',
    className: 'fa-6x'
  },
  '7x': {
    label: '7x',
    className: 'fa-7x'
  },
  '8x': {
    label: '8x',
    className: 'fa-8x'
  },
  '9x': {
    label: '9x',
    className: 'fa-9x'
  },
  '10x': {
    label: '10x',
    className: 'fa-10x'
  }
};
export const sizeDefault: Size = 'regular';


// === Alignments ===
export type Alignment = 'none' | 'left' | 'right';
export type AlignmentAttributeDefinition = ModelAttributeDefinition<Alignment, 'iconAlignment'>;
export const alignmentOptions: { [key in Alignment]: SelectableOption; } = {
  none: {
    label: 'With text',
    icon: objectCenter
  },
  left: {
    label: 'Pull left',
    icon: objectLeft,
    className: 'fa-pull-left'
  },
  right: {
    label: 'Pull right',
    icon: objectRight,
    className: 'fa-pull-right'
  }
};
export const alignmentDefault: Alignment = 'none';

// === Styles ===
export type StyleAttributeDefinition = ModelAttributeDefinition<FontAwesomeStyle, 'iconStyle'>;

/**
 * Labels for all the style options.
 */
export const faStyleLabels: { [key in FontAwesomeStyle]: string; } = {
  solid: 'Solid',
  regular: 'Regular',
  light: 'Light',
  thin: 'Thin',
  duotone: 'Duotone',
  brands: 'Brands',
  custom: 'Custom'
};

export const styleDefault = 'solid' as FontAwesomeStyle;

/**
 * A definition of Font Awesome style classes by version.
 */
export const faStyleClassByVersion: { [key in FontAwesomeVersion]: { [key in FontAwesomeStyle]?: string; } } = {
  '6': {
    solid: 'fa-solid',
    regular: 'fa-regular',
    light: 'fa-light',
    thin: 'fa-thin',
    duotone: 'fa-duotone',
    brands: 'fa-brands',
    custom: 'fa-kit'
  },
  '5': {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    duotone: 'fad',
    brands: 'fab',
    custom: 'fak'
  }
};
