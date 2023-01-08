export interface EmailDTO {
  email: string
}

export interface ActivateDTO {
  token: string
}


export interface UserInfoDTO {
  email: string,
  password: string
}

export interface AuthResponse {
  email: string,
  accessToken: string,
  refreshToken: string,
}

export interface TokenDTO {
  accessToken: string | null,
  refreshToken: string | null
}

export interface UpdatedToken {
  accessToken: string
}
