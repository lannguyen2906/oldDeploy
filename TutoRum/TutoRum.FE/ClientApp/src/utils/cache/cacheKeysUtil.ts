import { SignInModel } from "../services/Api";

export enum CacheKeys {
  login = "login",
  currentProfile = "currentProfile",
  postDetail = "postDetail",
  postList = "postList",
  adminPostList = "adminPostList",
  adminAccountList = "adminAccountList",
  postCategoryList = "postCategoryList",
  tutorList = "tutorList",
  subjectList = "subjectList",
  majorsAndSpecializations = "majorsAndSpecializations",
  qualificationLevelList = "qualificationLevelList",
  tutorDetail = "tutorDetail",
  adminTutorList = "adminTutorList",
  billingEntriesByTutorLearnerSubject = "billingEntriesByTutorLearnerSubject",
  subjectDetailList = "subjectDetailList",
  tutorLearnerSubjectDetail = "tutorLearnerSubjectDetail",
  getClassrooms = "getClassrooms",
  billsByTutorLearnerSubject = "billsByTutorLearnerSubject",
  billHtmlById = "billHtmlById",
  adminContractList = "adminContractList",
  billDetailById = "billDetailById",
  feedbackDetailByTutorLearnerSubjectId = "feedbackDetailByTutorLearnerSubjectId",
  feedbackDetailByTutorId = "feedbackDetailByTutorId",
  notifications = "notifications",
  billsByTutor = "billsByTutor",
  getAllPaymentRequests = "getAllPaymentRequests",
  getPaymentRequestsByTutor = "getPaymentRequestsByTutor",
  getWalletOverview = "getWalletOverview",
  getAllTutorRequests = "getAllTutorRequests",
  getListTutorRegisteredDetail = "getListTutorRegisteredDetail",
  getTutorRequestDetail = "getTutorRequestDetail",
  getTutorRequestsByLearner = "getTutorRequestsByLearner",
  getTutorRequestsByTutor = "getTutorRequestsByTutor",
  getAllTutorRequestsAdmin = "getAllTutorRequestsAdmin",
  getAllRateRanges = "getAllRateRanges",
  getRateRangeById = "getRateRangeById",
  feedbackStatistics = "feedbackStatistics",
  tutorSchedule = "tutorSchedule",
  topTutor = "topTutor",
  topSubject = "topSubject",
  adminMenuAction = "adminMenuAction",
  getTutorLearnerSubjectDetailByTutorRequestId = "getTutorLearnerSubjectDetailByTutorRequestId",
}

export const cacheKeysUtil = {
  login: (loginModel: SignInModel) => [CacheKeys.login, loginModel],
  postDetail: (postId: number) => [CacheKeys.postDetail, postId],
  postList: (pageIndex: number, pageSize: number) => [
    CacheKeys.postList,
    pageIndex,
    pageSize,
  ],
  adminPostList: (pageIndex: number, pageSize: number) => [
    CacheKeys.adminPostList,
    pageIndex,
    pageSize,
  ],
  adminAccountList: () => [CacheKeys.adminAccountList],
  adminTutorList: (
    pageNumber: number,
    pageSize: number,
    search?: string,
    status?: string,
    startDate?: string,
    endDate?: string
  ) => [
    CacheKeys.adminTutorList,
    pageNumber,
    pageSize,
    search,
    status,
    startDate,
    endDate,
  ],
  postCategoryList: () => [CacheKeys.postCategoryList],
  currentProfile: () => [CacheKeys.currentProfile],
  tutorList: () => [CacheKeys.tutorList],
  subjectList: () => [CacheKeys.tutorList],
  majorsAndSpecializations: () => [CacheKeys.majorsAndSpecializations],
  qualificationLevelList: () => [CacheKeys.qualificationLevelList],
  tutorDetail: (tutorId: string) => [CacheKeys.tutorDetail, tutorId],
  billingEntriesByTutorLearnerSubject: (tutorLearnerSubjectId: number) => [
    CacheKeys.billingEntriesByTutorLearnerSubject,
    tutorLearnerSubjectId,
  ],
  subjectDetailList: (userId: string, role: string) => [
    CacheKeys.subjectDetailList,
    userId,
    role,
  ],
  getClassrooms: (userId: string, role: string) => [
    CacheKeys.getClassrooms,
    userId,
    role,
  ],
  tutorLearnerSubjectDetail: (tutorLearnerSubjectId: number) => [
    CacheKeys.tutorLearnerSubjectDetail,
    tutorLearnerSubjectId,
  ],
  billsByTutorLearnerSubject: (tutorLearnerSubjectId: number) => [
    CacheKeys.billsByTutorLearnerSubject,
    tutorLearnerSubjectId,
  ],
  billHtmlById: (billId: number) => [CacheKeys.billHtmlById, billId],
  adminContractList: (page: number, size: number) => [
    CacheKeys.adminContractList,
    page,
    size,
  ],
  billDetailById: (billId: number) => [CacheKeys.billDetailById, billId],
  feedbackDetailByTutorLearnerSubjectId: (tutorLearnerSubjectId: number) => [
    CacheKeys.feedbackDetailByTutorLearnerSubjectId,
    tutorLearnerSubjectId,
  ],
  feedbackDetailByTutorId: (tutorId: string, showAll: boolean) => [
    CacheKeys.feedbackDetailByTutorId,
    tutorId,
    showAll,
  ],
  notifications: () => [CacheKeys.notifications],
  billsByTutor: () => [CacheKeys.billsByTutor],
  getAllPaymentRequests: (pageIndex: number, pageSize: number) => [
    CacheKeys.getAllPaymentRequests,
    pageIndex,
    pageSize,
  ],
  getAllTutorRequests: (
    pageIndex: number,
    pageSize: number,
    search?: string,
    cityId?: string,
    districtId?: string,
    minFee?: number,
    maxFee?: number,
    rateRangeId?: number,
    subject?: string,
    tutorQualificationId?: number,
    tutorGender?: string
  ) => [
    CacheKeys.getAllTutorRequests,
    pageIndex,
    pageSize,
    search,
    cityId,
    districtId,
    minFee,
    maxFee,
    rateRangeId,
    subject,
    tutorQualificationId,
    tutorGender,
  ],
  getAllTutorRequestsAdmin: (pageIndex: number, pageSize: number) => [
    CacheKeys.getAllTutorRequestsAdmin,
    pageIndex,
    pageSize,
  ],
  getPaymentRequestsByTutor: (pageIndex: number, pageSize: number) => [
    CacheKeys.getPaymentRequestsByTutor,
    pageIndex,
    pageSize,
  ],
  getWalletOverview: () => [CacheKeys.getWalletOverview],
  getListTutorRegisteredDetail: (tutorRequestId: number) => [
    CacheKeys.getListTutorRegisteredDetail,
    tutorRequestId,
  ],
  getTutorRequestDetail: (tutorRequestId: number) => [
    CacheKeys.getTutorRequestDetail,
    tutorRequestId,
  ],
  getTutorRequestsByLearner: (
    learnerId: string,
    pageIndex: number,
    pageSize: number
  ) => [CacheKeys.getTutorRequestsByLearner, learnerId, pageIndex, pageSize],
  getTutorRequestsByTutor: (
    tutorId: string,
    pageIndex: number,
    pageSize: number
  ) => [CacheKeys.getTutorRequestsByTutor, tutorId, pageIndex, pageSize],
  getAllRateRanges: () => [CacheKeys.getAllRateRanges],
  getRateRangeById: (id: number) => [CacheKeys.getRateRangeById, id],
  feedbackStatistics: (tutorId: string) => [
    CacheKeys.feedbackStatistics,
    tutorId,
  ],
  tutorSchedule: (tutorId: string) => [CacheKeys.tutorSchedule, tutorId],
  topTutor: (size: number) => [CacheKeys.topTutor, size],
  topSubject: (size: number) => [CacheKeys.topSubject, size],
  adminMenuAction: () => [CacheKeys.adminMenuAction],
  getTutorLearnerSubjectDetailByTutorRequestId: (tutorRequestId: number) => [
    CacheKeys.getTutorLearnerSubjectDetailByTutorRequestId,
    tutorRequestId,
  ],
};
