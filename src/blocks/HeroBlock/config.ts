import { linkGroup } from '@/fields/linkGroup'
import { mediaField } from '@/fields/media'
import { textField } from '@/fields/text'
import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlock',
  fields: [
    mediaField({ name: 'logo', required: false }),
    textField({ name: 'title' }),
    textField({ name: 'description' }),
    linkGroup({
      appearances: [],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
