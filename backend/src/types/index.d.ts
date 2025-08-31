declare namespace Express {
  export interface Request {
    user?: {
      userId: string;
      // add other properties if needed
    };
  }
}