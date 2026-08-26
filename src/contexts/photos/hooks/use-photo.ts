import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { Photo } from "../models/photo";

interface PhotoDetailResponse extends Photo {
  nextPhoId?: string
  previousPhotoId?: string
}


export default function usePhoto(id?: string) {
  const { data, isLoading } = useQuery<PhotoDetailResponse>({
    queryKey: ["photo", id],
    queryFn: () => fetcher(`/photos/${id}`),
    enabled: !!id
  })

  return {
    photo: data,
    nextPhotoId: data?.nextPhoId,
    previousPhotoId: data?.previousPhotoId,
    isLoadingPhoto: isLoading
  }
}