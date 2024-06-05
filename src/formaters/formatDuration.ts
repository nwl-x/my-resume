import dayjs from 'dayjs'
import 'dayjs/locale/fr'

dayjs.locale('fr')

const formatDuration = (startDate: string, endDate: string) =>
  `De ${dayjs(startDate).format('MMM YYYY')} à ${dayjs(endDate).format('MMM YYYY')}`

export default formatDuration
