import { EnvelopeFill, TelephoneFill, Linkedin, GeoAltFill, Globe2 } from 'react-bootstrap-icons'
import type { Infos, InfosFormatted } from '@/type'

const formatInfos = (infos: Infos): InfosFormatted[] => {
  const {
    email = '',
    phone = '',
    profiles = [],
    url = ''
    // location: { address = '', zip = '', city = '' }
  } = infos

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
