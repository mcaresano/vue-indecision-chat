import { describe, expect, test } from 'vitest'
import MyCounter from '@/components/my-counter/MyCounter.vue'
import { mount } from '@vue/test-utils'

describe('<MyCounter/>', () => {
  let value = 5
  const wrapper = mount(MyCounter, {
    props: {
      value
    }
  })
  test('should match snapshot', () => {
    // crea el snapshot de los componentes para comparar algún cambio posterior. (Renderizado de componente)
    expect(wrapper.html()).toMatchSnapshot()  
  })

  test('renders the counter value correctly', () => {
    value = 5
    // valida por el contenido de un elemento html. (Renderizado de componente)
    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`) 
  })

  test('should test label with contain data-testId in the component', () => {
    value = 30
    // valida por el contenido de un elemento html con el agregado de un id personalizado. (Renderizado de componente)
    expect(wrapper.find('[data-test-id="square-label"]').text()).toContain(`Square: ${value}`)
  })

  test('should all h3 labels and values', () => {
    value = 5
    // Valida por el contenido de cada elemento html seleccionado. (Renderizado de componente)
    const [counterLabel, squareLabel] = wrapper.findAll('h3')
    expect(counterLabel.text()).toContain(`Counter: ${value}`)
    expect(squareLabel.text()).toContain(`Square: ${value * 6}`)
  })
})
