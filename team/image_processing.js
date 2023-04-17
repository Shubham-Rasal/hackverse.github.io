// WIP
// Source: https://github.com/ConvertAPI/convertapi-js
import ConvertApi from 'convertapi-js'
let convertApi = ConvertApi.auth('your-api-secret')
let params = convertApi.createParams()
params.add('File', elFileInput.files[0]);
let result = await convertApi.convert('jpg', 'webp', params)