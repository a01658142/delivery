export default {
  name: 'users',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'User Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastname',
      type: 'string',
      title: 'Lastname',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'User image',
    },
    {
      name: 'mobile',
      type: 'number',
      title: 'Mobile phone',
      validation: (Rule) => Rule.max(10),
    },
    {
      name: 'mail',
      type: 'string',
      title: 'E-mail',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'birth',
      type: 'string',
      title: 'Date of Birth',
    },
    {
      name: 'id',
      type: 'number',
      title: 'ID user',
      validation: (Rule) => Rule.required(),
      // to: [{type:'userid'}],
    },
  ],
}