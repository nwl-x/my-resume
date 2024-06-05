import { EnvelopeFill, TelephoneFill, Linkedin, GeoAltFill, Globe2 } from 'react-bootstrap-icons'
import type { FormatInfosProps, InfosFormatted } from '@/type'

const formatInfos = ({
  email = '',
  phone = '',
  url = '',
  profiles = [],
  location: { address = '', zip = '', city = '' }
}: FormatInfosProps): InfosFormatted[] => {
  return [
    {
      icon: EnvelopeFill,
      texts: [email],
      url: `mailto:${email}`
    },
    {
      icon: TelephoneFill,
      texts: [phone],
      url: `tel:${phone}`
    },
    {
      icon: Linkedin,
      texts: [profiles[0]?.network],
      url: profiles[0]?.url
    },
    {
      icon: Globe2,
      texts: ['Site web'],
      url
    }
    // {
    //   icon: GeoAltFill,
    //   texts: [address, `${zip} ${city}`],
    //   url: `https://www.google.com/maps/place/92500+Rueil-Malmaison`
    // }
  ]
}

export default formatInfos
