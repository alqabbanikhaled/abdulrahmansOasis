module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env('JWT_SECRET'),
      ratelimit: { interval: 60000, max: 100000 }
    }
  },
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
        serviceAccount: {
          "type": "service_account",
          "project_id": "abdelrahman-oasis",
          "private_key_id": "b33fd54b3b2086f65f59e0785a55a66603eaf387",
          "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6W4/QWZfRlkAt\nlvASpyX9gNMB3W6qIvyBnoZiaohjMBxuNH3fUt8+i5Kum7BvEQ30C51nadGY0kQN\nWPI2V79zlOVF5Ur5Hlkiv3v7uwHAZo+ib94WiCEGU6CMAMarkqifl7upOQKaPdNW\nzQ0roGUkA0xJT+fwQyAIn/nI7kRd/RUz8oFVfSOwOi5qUvbNlHUvju3TeFTlEBNp\nBuSEcO7KzkQ/OFNexCgUhoAf/8ZKreUJvOC35bpcoxcc9LXxImruYlDGrYYMpdXR\n+siw96NuEGoRlk9ARvup+rJAUq+w5JpClTfUUAWjZFpZrUPGNa95hGkUgB48lPnX\npE3cwVdhAgMBAAECggEADMnENmqzf5slJ8u8CTelpH3+3NmmYq/4bmejtqSzW8Ud\nKlXZTmYoMilPRUKjSpfbwoO6hzJsguVo7JaONnryhRqyWgfIS4yQ1tDXj/hvABY5\npI6zKY4pX/8EnR7fgz4S6rK1msDyBAYaltIG5ZfB4QUF6uD8HFFq5RSfRjHNiLp7\nPXtLZHQfpuDF7TJ6bxyAZliKVmzFJ6rt7yL/45iRSTJ5uasLEkfu/qCoP1vwdoOr\nTDszJ1979A9B/lzkSUKy+iQD1YLsjqRKzxwTnIUpfJP6NRzMfStdsJiHZ1jme439\n9UlhpwBGcX+bNYA0HMLz3t7w08pbGtWD2URfXomJXQKBgQD8AERG9ErZ0sYLn3yt\nJsqkV2WZX5XRr99RVSGfY09JfFgWOZrsfRbrK2rUZzoh9SRLiPMoVCVnEHFfMeUP\njXN6hr4Tn6c3fs7kfLJkPthG3HJLbdmm5JIqn1j4rL5SjoEeVnQegeJAr7ye5V2y\nDUnGrZEBIx35AV61E5ir0WKphQKBgQC9UJ/RvWXMZ7m8eUVWnFxZ1wMcA8vEWKKH\nTN2gZq4uymJCynhYXJ4JsKU4QEvzAVql9fcqiB4d9Sj96clwuutzHFihplHa2lqG\nSzMXH6rPWyEn7WGwFmGsXuFsKtY/l+/8NmU2KReTaaBvKAJ1rNmZ0zvJlRI7BbJo\no9739ivPLQKBgQCQ2/Jju0Bf0Iqp2cdInbj1GYw8yzaLMAc2cLKANg041/Km6/xD\nn3CSRQYHDUPci1eO2C227BAIG+qf50WeWBiewV/4VdlAzHNP4uKFP58BtO06sO3h\nwxjGyYzSfjJ1sJdGgjoD43PU7XCHAqCGnp7fR5zIQ5CSOBhiDN7BPf7yJQKBgQCs\ngvOf5L8G7N5L6RZOPl3JYCztMmhUm5A/SsQKjobbDIFN68KOgpdgrR9hivWqkulP\nojuA/lizY9vexVNS7oHvez0o0K52h9NF3PDJeYnlOl2UTLRgCYUn1a4FK2Pgv0to\nwQipufhJ1E7l+8eCA+imS96HatgaAK76u5lKy4BQYQKBgHV6ry6nUFoyQwFwMBMf\nKCNvqLbQwTUQc1QJlo9CLDL1WbR8tzWOJIxI/mCx//dDHhLJucgdNjjw7MKoEJGe\n7cHg8f0aQ7FJAoP7Xewn1HIGyXdXtvtqLRN3lO8qlIxhsYt8h8KALfkrloJVfzJ7\nvyy4cKFkZ+D8yocrA1KoCT8r\n-----END PRIVATE KEY-----\n",
          "client_email": "abdelrahman-oasis@abdelrahman-oasis.iam.gserviceaccount.com",
          "client_id": "100585777312114410471",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/abdelrahman-oasis%40abdelrahman-oasis.iam.gserviceaccount.com"
        },
        bucketName: 'abdelrahman-oasis-bucket',
        publicFiles: true,
        uniform: false,
        basePath: '',
        baseUrl: 'https://storage.googleapis.com/abdelrahman-oasis-bucket',
      },
    }
  }
})


