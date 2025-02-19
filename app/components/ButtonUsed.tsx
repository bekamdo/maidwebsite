import { Button } from '@/components/ui/button'


const ButtonUsed = ({phoneNumber}:{phoneNumber:number}) => {
  return (
    <Button size='lg'>
       +{phoneNumber}
    </Button>
  )
}

export default ButtonUsed