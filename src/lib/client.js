import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'hvchy05w', // You can find this in your sanity.json
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-10-10', // use current date (YYYY-MM-DD) to target the latest API version
});

// Create an image URL builder
const builder = imageUrlBuilder(client);

// Add the urlFor function to the client
client.urlFor = (source) => builder.image(source);
