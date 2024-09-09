import { EnvelopeFill, TelephoneFill, Linkedin, Github, Globe2 } from 'react-bootstrap-icons'
// import { EnvelopeFill, TelephoneFill, Linkedin, Github, Globe2, GeoAltFill } from 'react-bootstrap-icons'

// == TypeScript ==
import type { FormatBasicsProps, BasicsFormatted } from '@/type'

const formatBasics = (basics: FormatBasicsProps): BasicsFormatted[] => {
  const {
    email = '',
    phone = '',
    profiles = []
    // location: { address = '', zip = '', city = '' }
  } = basics

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
    // {
    //   icon: GeoAltFill,
    //   texts: [address, `${zip} ${city}`],
    //   url: `https://www.google.com/maps/place/92500+Rueil-Malmaison`
    // },
    // {
    //   icon: Globe2,
    //   texts: [profiles[0]?.network],
    //   url: profiles[0]?.url
    // },
    {
      icon: Linkedin,
      texts: [profiles[1]?.network],
      url: profiles[1]?.url
    },
    {
      icon: Github,
      texts: [profiles[2]?.network],
      url: profiles[2]?.url
    }
  ]
}

export default formatBasics
