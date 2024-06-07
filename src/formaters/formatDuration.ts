import dayjs from 'dayjs'
import 'dayjs/locale/fr'

dayjs.locale('fr')

const formatDuration = (startDate: string, endDate: string, format = 'MMM YYYY') =>
  `${dayjs(startDate).format(format)} - ${dayjs(endDate).format(format)}`

export default formatDuration
