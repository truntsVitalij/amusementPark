<template>
  <section class="section contact-section">
    <div class="columns">
      <div class="column contacts-column">
        <div class="contact-block">
          <p class="subtitle">
            You can send your feedback about the work of the park or your
            wishes. We will answer you as soon as possible.
          </p>
          <div class="field">
            <div class="label">Name</div>
            <input class="input" placeholder="Your name" />
          </div>
          <div class="field">
            <div class="label">E-mail</div>
            <input class="input" placeholder="Your e-mail" />
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
          <button class="button is-outline">Send</button>
        </div>
      </div>
      <div class="column">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60098.41247529702!2d7.687054255672416!3d48.26437949280767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791398732e35ed9%3A0x14b73404fff2ada0!2z0JXQstGA0L7Qv9CwLdC_0LDRgNC6!5e0!3m2!1sru!2sby!4v1633513162895!5m2!1sru!2sby"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contactsSection",
};
</script>

<style lang="scss" scoped>
.contact-section {
  background: black;
  padding: 0;
  padding-top: 200px;
}
.columns {
  .column {
    display: flex;
    justify-content: center;
    &:last-child {
      padding: 0;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
    .contact-block {
      width: 80%;
      .subtitle {
        color: white;
      }
      .field {
        margin-bottom: 2em;
        &:last-of-type {
          margin-bottom: 1em;
        }
        .label {
          color: white;
        }
        .input {
        }
      }
    }
  }
}
</style>