// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard.vue'

// The component to test

test('displays event time,date', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(EventCard)
  const message = '@12:00 on January 28, 2022'

  expect(wrapper.find('span').element.textContent).toMatch(message)
})

test('displays event title', () => {
  const wrapper = mount(EventCard)
  const message = 'Cat Adoption Day'

  expect(wrapper.find('h4').element.textContent).toMatch(message)
})
