import initStoryshots from '@storybook/addon-storyshots';
import 'jest-styled-components'
import renderer from 'react-test-renderer'


initStoryshots({
  test: ({ story, context }) => {
    const storyElement = story.render(context)
    const tree = renderer.create(storyElement).toJSON()
    expect(tree).toMatchSnapshot()
  }
})
