import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { characterInstance } from '../axios/axiosHttp'
import { AxiosResponse } from 'axios'
import { detailNamespace } from '../types.d'
import DetailsCard from '../components/DetailsCard'

const CharacterDetails = () => {

  const [detailsResult, setDetailsResult] = useState<detailNamespace.iDetails[]>([]);
  console.log(detailsResult)

    const params = useParams()
    console.log(params.slug)

    useEffect(()=>{
      (async () => {
        const detailsData = await characterInstance
          .get(`${params?.slug}`)
          .then((res: AxiosResponse) => {
            setDetailsResult(res?.data)
          });
        console.log(detailsData);
      })();
    }, [])
  return (
    <div className="container mt-3">
      This is a template for single character details  for character number - {params.slug}

      {/* @ts-ignore */}
      <DetailsCard {...detailsResult} />;
    </div>
  )
}

export default CharacterDetails
