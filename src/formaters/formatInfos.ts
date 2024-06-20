import { EnvelopeFill, TelephoneFill, Linkedin, Github, GeoAltFill, Globe2 } from 'react-bootstrap-icons'

// == TypeScript ==
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
      icon: Github,
      texts: [profiles[1]?.network],
      url: profiles[1]?.url
    },
    {
      icon: Globe2,
      texts: ['Site web'],
      url
    },
    {
      icon: GeoAltFill,
      texts: [address, `${zip} ${city}`],
      url: `https://www.google.com/maps/place/92500+Rueil-Malmaison`
    }
  ]
}

export default formatInfos
