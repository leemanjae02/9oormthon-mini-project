import { useCallback } from "react";
import dayjs from "dayjs";

const useFormattedDate = () => {
  const formatDate = useCallback((isoString: string) => {
    return dayjs(isoString).format("YY/MM/DD HH:mm");
  }, []);
  return formatDate;
};

export default useFormattedDate;

//useCallback은 메모리제이션을 통해 불필요한 함수 재생성을 방지함
//formatDate가 한번 생성되고 나면 useFormattedDate가 호출될 때마다 항상 동일한 참조를 가지게 된다.
// 자식 컴포넌트로 넘길 때나 의존성 배열에 포함될 때 함수의 불필요한 재생성을 막음
// 근데 여기서는 자식 컴포넌트로 넘기지 않는데 이게 과연 최적화 하는데 도움이 될까?
