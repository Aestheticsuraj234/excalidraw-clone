import { useState } from "react";
import { useMutation } from "convex/react";

export function useApiMutations(mutationFunction: any) {
  const [pending, setPending] = useState(false);

  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => {
        setPending(false);
      })
      .then((result: any) => {
        return result;
      })
      .catch((error: any) => {
        throw error;
      });
  };



  return{
    pending,
    mutate
  }

}
