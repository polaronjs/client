import { StructureVariable, ColorVariable } from './types';

export const config = {
  /**
   * The width of the sidebar menu in pixels
   */
  sidebarWidth: new StructureVariable(
    Math.min(300, window.innerWidth - 50),
    'px'
  ),

  /**
   * The color used for non-informative accents (an informative color would be something like a danger, warning or success color)
   */
  accentColor: new ColorVariable(216.9, 100, 50),

  /**
   * A slightly lighter variation of the accent color
   */
  accentColor1: ({ accentColor }: any) => accentColor.lighten(10),

  /**
   * A slightly darker variation of the accent color
   */
  'accentColor-1': ({ accentColor }: any) => accentColor.lighten(-10),

  /**
   * The color used to represent danger
   */
  dangerColor: new ColorVariable(347.8, 86.3, 45.7),

  /**
   * A slightly lighter variation of the danger color
   */
  dangerColor1: ({ dangerColor }: any) => dangerColor.lighten(10),

  /**
   * A slightly darker variation of the danger color
   */
  'dangerColor-1': ({ dangerColor }: any) => dangerColor.lighten(-10),

  /**
   * The color used to represent success
   */
  successColor: new ColorVariable(141, 77, 39.2),

  /**
   * A slightly lighter success color
   */
  successColor1: ({ successColor }: any) => successColor.lighten(10),

  /**
   * A slightly darker success color
   */
  'successColor-1': ({ successColor }: any) => successColor.lighten(-10),

  gray1Color: new ColorVariable(0, 0, 5),

  gray2Color: ({ gray1Color }: any) => gray1Color.lighten(15),

  gray3Color: ({ gray1Color }: any) => gray1Color.lighten(30),

  gray4Color: ({ gray1Color }: any) => gray1Color.lighten(45),

  gray5Color: ({ gray1Color }: any) => gray1Color.lighten(70),

  gray6Color: ({ gray1Color }: any) => gray1Color.lighten(85),

  gray7Color: new ColorVariable(0, 0, 100), // exactly white

  modalBackground: ({ gray7Color }: any) => gray7Color.mutateAlpha(0.9),
};
