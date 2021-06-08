import { shallowMount } from '@vue/test-utils'
import Login from '../../src/components/Login'

describe('Login.vue', () => {
  it('has the required elements', () => {
    const wrapper = shallowMount(Login)

    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#password').exists()).toBe(true)
    expect(wrapper.find('#Login').exists()).toBe(true)
    expect(wrapper.find('#Login').text()).toBe('Log in')
  })
})
