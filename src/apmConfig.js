import { init as initApm } from '@elastic/apm-rum'

const apm = initApm({
  serviceName: 'app-rum-react',
  serverUrl: `${elastic_apm_url}`,
  serviceVersion: '1.0.0',
  environment: 'dev'
})

export default apm