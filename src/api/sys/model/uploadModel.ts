export interface UploadApiResult {
  message: string;
  code: number;
  result: string; //TIPS:改动结构以适应SBVADMIN后台文件上传,原来是url
}
