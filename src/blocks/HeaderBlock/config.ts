import { link } from '@/fields/link'
import type { Block } from 'payload'

export const HeaderBlock: Block = {
  slug: 'headerBlock',
  interfaceName: 'HeaderBlock',
  fields: [
    {
      name: 'websiteName',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'relationship',
      relationTo: 'media',
    },

    {
      name: 'navItems',
      type: 'group',
      fields: [
        {
          name: 'spaceBetween',
          type: 'select',
          label: 'Space Between',
          options: [
            { label: 'Extra Small', value: 'space-x-2' },
            { label: 'Small', value: 'space-x-4' },
            { label: 'Medium', value: 'space-x-6' },
            { label: 'Large', value: 'space-x-8' },
            { label: 'Extra Large', value: 'space-x-12' },
          ],
          defaultValue: 'space-x-4',
          admin: {
            description: 'Select the space between elements',
          },
        },
        {
          name: 'items',
          type: 'array',
          dbName: 'headerNavLinks',
          maxRows: 6,
          fields: [link()],
        },
      ],
    },
  ],
}
