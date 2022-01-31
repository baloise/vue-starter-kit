/**
 * Baloise Design System
 * --------------------
 * The Baloise Design System consists of UI components and a clearly
 * defined visual style, released as both code implementations and
 * design artifacts to build any number of web applications.
 *
 * https://design.baloise.dev/
 *
 */

import './baloise-design-system.scss'
import { createBaloiseDesignSystem } from '@baloise/design-system-components-vue'

export const baloiseDesignSystem = createBaloiseDesignSystem({
  defaults: {
    region: 'CH',
    language: 'en',
  },
})
