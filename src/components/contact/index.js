import checkIcon from '../checkIcon/index.js'
const contact = {
  name: 'contact',
  components: {
    checkIcon
  },
  props: {
    contact: {
      type: Object,
      default: () => {}
    },
    chat: {
      type: Object,
      default: () => {}
    },
    selected: {
      type: Boolean,
      default: false
    },
    showmessage: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {

    }
  },
  methods: {
    click() {
      this.$emit('click', this.contact)
    },
    isYourselfMessage(message) {
      return message.author.id === this.chat.user.id
    },
    getLastMessage(contact) {
      const lastMessage = contact.messages[0].messages.at(-1)
      return lastMessage
      // .text
    },
  },
  computed: {
  },
  mounted() {
  },
  template: `
  <div @click="click()" class="chat-contacts-list__dialog contact">
    <div class="contact-avatar">
      <img :src="contact.avatar" alt="">
      <checkIcon v-if="selected"/>
    </div>
    <div class="contact-info">
      <div class="contact-title">
        {{ contact.title }}
      </div>
      <div class="">

      </div>
      <div v-if="contact.messages.length && showmessage" class="contact-message clip">
        <!-- {{ contact.messages[contact.messages.length - 1].text }} -->
        <transition name="slide-fade" mode="out-in">
          <div :key="getLastMessage(contact).id" class="contact-message__text clip" :class="contact.active ? 'active' : ''">
            {{ getLastMessage(contact).text ? getLastMessage(contact).text : 'Вложения:' + getLastMessage(contact).attachment.files.length }}
          </div>
        </transition>
        <div v-if="isYourselfMessage(getLastMessage(contact))" :class="getLastMessage(contact).checked ? 'checked' : ''" class="contact-message__state">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
            <defs>
            </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <path d="M 89.122 3.486 L 89.122 3.486 c -2.222 -3.736 -7.485 -4.118 -10.224 -0.742 L 33.202 59.083 c -1.118 1.378 -3.245 1.303 -4.262 -0.151 L 17.987 43.291 c -3.726 -5.322 -11.485 -5.665 -15.666 -0.693 l 0 0 c -2.883 3.428 -3.102 8.366 -0.533 12.036 L 24.206 86.65 c 2.729 3.897 8.503 3.89 11.222 -0.014 l 6.435 -9.239 L 88.87 10.265 C 90.28 8.251 90.378 5.598 89.122 3.486 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
          </svg>
          <svg class="second" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
            <defs>
            </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <path d="M 89.122 3.486 L 89.122 3.486 c -2.222 -3.736 -7.485 -4.118 -10.224 -0.742 L 33.202 59.083 c -1.118 1.378 -3.245 1.303 -4.262 -0.151 L 17.987 43.291 c -3.726 -5.322 -11.485 -5.665 -15.666 -0.693 l 0 0 c -2.883 3.428 -3.102 8.366 -0.533 12.036 L 24.206 86.65 c 2.729 3.897 8.503 3.89 11.222 -0.014 l 6.435 -9.239 L 88.87 10.265 C 90.28 8.251 90.378 5.598 89.122 3.486 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>`
}
export default contact
// Vue.component('message', message)