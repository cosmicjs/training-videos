import { getParameterByName } from './helpers'
const config = { bucket: { slug: getParameterByName('bucket_slug') } } // add read / write key if applicable
config.form_slug = 'training-videos-form'
config.type_slug = 'training-videos'
export default config