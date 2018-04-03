import test from 'ava'
import { mount } from '@vue/test-utils'
import SignIn from '../../components/SignIn/SignIn.vue'

let wrapperClose
let wrapperOpen

test.beforeEach(() => {
    const dialogClose = false
    const dialogOpen = true

    wrapperClose = mount(SignIn, {
        data: { dialogClose },
    })

    wrapperOpen = mount(SignIn, {
        data: { dialogOpen },
    })
})

//CLOSE

test('SignIn[CLOSE] snapshot', (t) => {
    t.snapshot({ html: wrapperClose.html() })
})

test('SignIn[CLOSE] dialog component contains a button', (t) => {
    t.true(wrapperClose.findAll("v-dialog").contains('v-btn'))
})

test('SignIn[CLOSE] dialog component contains a button with "Sign In" text', (t) => {
    t.is(wrapperClose.findAll("v-dialog").at(0).findAll('v-btn').at(0).text(), 'Sign In');
})

// test('SignIn[CLOSE] dialog component does not contains card element', (t) => {
//     wrapperClose.findAll("v-dialog").contains('v-card').
//     t.false();
// })

//OPEN

// test('SignIn[OPEN] snapshot', (t) => {
//     t.snapshot({ html: wrapperOpen.html() })
// })

// test('SignIn[OPEN] dialog component does not contains a button', (t) => {
//     t.false(wrapperOpen.findAll("v-dialog").contains('v-btn'))
// })

// test('SignIn[OPEN] dialog component does  contains card element', (t) => {
//     t.true(wrapperOpen.findAll("v-dialog").contains('v-card'));
// })
