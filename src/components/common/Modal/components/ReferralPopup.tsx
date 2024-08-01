import React from 'react'

type Props = {}

const ReferralPopup = (props: Props) => {
  return (
    <div className="AtScrollHide">
    <h3 className="font-medium text-2xl text-white">
    Referral Rewards
    </h3>
    <p className="text-[#B0B0B0] mt-7 text-start text-wider !text-sm !leading-[17px] !font-normal">
    Our referral program has 3 levels of support, providing you with the opportunity to earn bonuses for inviting friends:
    </p>

    <p className="text-[#B0B0B0] mt-5 text-start text-wider !text-sm !leading-[17px] !font-normal">
    1. <span className='font-bold text-white'>Level 1:</span> You receive a bonus for each friend who registers using your referral link.
    </p>

    <p className="text-[#B0B0B0] mt-5 text-start text-wider !text-sm !leading-[17px] !font-normal">
    2. <span className='font-bold text-white'>Level 2:</span> You receive an additional bonus when friends of your referred friends also register and start using the program.
    </p>

    <p className="text-[#B0B0B0] mt-5 text-start text-wider !text-sm !leading-[17px] !font-normal">
    3. <span className='font-bold text-white'>Level 3:</span> You receive a bonus when friends of the second level invite new participants.
    </p>

    <p className="text-[#B0B0B0] mt-5 text-start text-wider !text-sm !leading-[17px] !font-normal">
    Thus, you earn rewards not only for your direct invitations but also for the activity of all subsequent levels in your network.
    </p>

   
  </div>
  )
}

export default ReferralPopup
