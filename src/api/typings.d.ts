declare namespace API {
  type deleteByIdUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deleteByIdUsingPOSTParams = {
    /** id */
    id: number;
  };

  type getByIdUsingGET1Params = {
    /** id */
    id: number;
  };

  type getByIdUsingGET2Params = {
    /** id */
    id: number;
  };

  type getByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getSignInRecordUsingGETParams = {
    /** year */
    year?: number;
  };

  type LoginAndRegisterDTO = {
    [x: string]: string;
    userAccount?: string;
    userPassword?: string;
  };

  type LoginVO = {
    createTime?: string;
    editTime?: string;
    id?: number;
    token?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type PageDTOQuestionBankVO_ = {
    list?: QuestionBankVO[];
    pages?: number;
    total?: number;
  };

  type PageDTOQuestionVO_ = {
    list?: QuestionVO[];
    pages?: number;
    total?: number;
  };

  type PageDTOUserVO_ = {
    list?: UserVO[];
    pages?: number;
    total?: number;
  };

  type QuestionBankAddDTO = {
    description?: string;
    id?: number;
    picture?: string;
    priority?: number;
    title?: string;
  };

  type QuestionBankVO = {
    createTime?: string;
    description?: string;
    editTime?: string;
    id?: number;
    picture?: string;
    priority?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type QuestionQuery = {
    id?: number;
    isAsc?: boolean;
    notId?: number;
    pageNo?: number;
    pageSize?: number;
    questionBankId?: number;
    searchText?: string;
    sortBy?: string;
    tags?: string[];
    userId?: number;
  };

  type QuestionVO = {
    answer?: string;
    content?: string;
    createTime?: string;
    editTime?: string;
    id?: number;
    isDelete?: number;
    questionBankId?: number;
    tags?: string;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type Result = {
    code?: number;
    data?: Record<string, any>;
    error_msg?: string;
  };

  type ResultBoolean_ = {
    code?: number;
    data?: boolean;
    error_msg?: string;
  };

  type ResultListInt_ = {
    code?: number;
    data?: number[];
    error_msg?: string;
  };

  type ResultLoginVO_ = {
    code?: number;
    data?: LoginVO;
    error_msg?: string;
  };

  type ResultString_ = {
    code?: number;
    data?: string;
    error_msg?: string;
  };

  type selectByPageUsingGET1Params = {
    endTime?: string;
    isAsc?: boolean;
    pageNo?: number;
    pageSize?: number;
    sortBy?: string;
    startTime?: string;
    userAccount?: string;
    userName?: string;
    userRole?: string;
  };

  type selectByPageUsingGETParams = {
    endTime?: string;
    isAsc?: boolean;
    pageNo?: number;
    pageSize?: number;
    sortBy?: string;
    startTime?: string;
    title?: string;
    userId?: number;
  };

  type UserAddDTO = {
    id?: number;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserDTO = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdatePasswordDTO = {
    confirmPassword?: string;
    newPassword?: string;
    oldPassword?: string;
  };

  type UserVO = {
    createTime?: string;
    editTime?: string;
    id?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };
}
