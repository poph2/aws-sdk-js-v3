// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AppFabricServiceException as __BaseException } from "./AppFabricServiceException";

/**
 * @public
 * <p>You are not authorized to perform this operation.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * <p>Contains API key credential information.</p>
 */
export interface ApiKeyCredential {
  /**
   * <p>An API key for an application.</p>
   */
  apiKey: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthType = {
  API_KEY: "apiKey",
  OAUTH2: "oauth2",
} as const;

/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 * @enum
 */
export const Persona = {
  ADMIN: "admin",
  ENDUSER: "endUser",
} as const;

/**
 * @public
 */
export type Persona = (typeof Persona)[keyof typeof Persona];

/**
 * @public
 * @enum
 */
export const AppAuthorizationStatus = {
  CONNECTED: "Connected",
  CONNECTION_VALIDATION_FAILED: "ConnectionValidationFailed",
  PENDING_CONNECT: "PendingConnect",
  TOKEN_AUTO_ROTATION_FAILED: "TokenAutoRotationFailed",
} as const;

/**
 * @public
 */
export type AppAuthorizationStatus = (typeof AppAuthorizationStatus)[keyof typeof AppAuthorizationStatus];

/**
 * @public
 * <p>Contains information about an application tenant.</p>
 */
export interface Tenant {
  /**
   * <p>The ID of the application tenant.</p>
   */
  tenantIdentifier: string | undefined;

  /**
   * <p>The display name of the tenant.</p>
   */
  tenantDisplayName: string | undefined;
}

/**
 * @public
 * <p>Contains information about an app authorization.</p>
 */
export interface AppAuthorization {
  /**
   * <p>The Amazon Resource Name (ARN) of the app authorization.</p>
   */
  appAuthorizationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the app bundle for the app authorization.</p>
   */
  appBundleArn: string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  app: string | undefined;

  /**
   * <p>Contains information about an application tenant, such as the application display name
   *          and identifier.</p>
   */
  tenant: Tenant | undefined;

  /**
   * <p>The authorization type.</p>
   */
  authType: AuthType | string | undefined;

  /**
   * <p>The state of the app authorization.</p>
   *          <p>The following states are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PendingConnect</code>: The initial state of the app authorization. The app
   *                authorization is created but not yet connected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Connected</code>: The app authorization is connected to the application, and
   *                is ready to be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConnectionValidationFailed</code>: The app authorization received a
   *                validation exception when trying to connect to the application. If the app
   *                authorization is in this state, you should verify the configured credentials and try
   *                to connect the app authorization again.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TokenAutoRotationFailed</code>: AppFabric failed to refresh the access token. If
   *                the app authorization is in this state, you should try to reconnect the app
   *                authorization.</p>
   *             </li>
   *          </ul>
   */
  status: AppAuthorizationStatus | string | undefined;

  /**
   * <p>The timestamp of when the app authorization was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the app authorization was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The user persona of the app authorization.</p>
   *          <p>This field should always be <code>admin</code>.</p>
   */
  persona?: Persona | string;

  /**
   * <p>The application URL for the OAuth flow.</p>
   */
  authUrl?: string;
}

/**
 * @public
 * <p>Contains a summary of an app authorization.</p>
 */
export interface AppAuthorizationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the app authorization.</p>
   */
  appAuthorizationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the app bundle for the app authorization.</p>
   */
  appBundleArn: string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  app: string | undefined;

  /**
   * <p>Contains information about an application tenant, such as the application display name
   *          and identifier.</p>
   */
  tenant: Tenant | undefined;

  /**
   * <p>The state of the app authorization.</p>
   *          <p>The following states are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PendingConnect</code>: The initial state of the app authorization. The app
   *                authorization is created but not yet connected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Connected</code>: The app authorization is connected to the application, and
   *                is ready to be used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConnectionValidationFailed</code>: The app authorization received a
   *                validation exception when trying to connect to the application. If the app
   *                authorization is in this state, you should verify the configured credentials and try
   *                to connect the app authorization again.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TokenAutoRotationFailed</code>: AppFabric failed to refresh the access token. If
   *                the app authorization is in this state, you should try to reconnect the app
   *                authorization.</p>
   *             </li>
   *          </ul>
   */
  status: AppAuthorizationStatus | string | undefined;

  /**
   * <p>Timestamp for when the app authorization was last updated.</p>
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 * <p>Contains information about an app bundle.</p>
 */
export interface AppBundle {
  /**
   * <p>The Amazon Resource Name (ARN) of the app bundle.</p>
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key
   *          used to encrypt the application data.</p>
   */
  customerManagedKeyArn?: string;
}

/**
 * @public
 * <p>Contains a summary of an app bundle.</p>
 */
export interface AppBundleSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the app bundle.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>Contains information about an Amazon Kinesis Data Firehose delivery stream.</p>
 */
export interface FirehoseStream {
  /**
   * <p>The name of the Amazon Kinesis Data Firehose delivery stream.</p>
   */
  streamName: string | undefined;
}

/**
 * @public
 * <p>Contains information about an Amazon S3 bucket.</p>
 */
export interface S3Bucket {
  /**
   * <p>The name of the Amazon S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The object key to use.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>Contains information about an audit log destination.</p>
 */
export type Destination = Destination.FirehoseStreamMember | Destination.S3BucketMember | Destination.$UnknownMember;

/**
 * @public
 */
export namespace Destination {
  /**
   * <p>Contains information about an Amazon S3 bucket.</p>
   */
  export interface S3BucketMember {
    s3Bucket: S3Bucket;
    firehoseStream?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  export interface FirehoseStreamMember {
    s3Bucket?: never;
    firehoseStream: FirehoseStream;
    $unknown?: never;
  }

  export interface $UnknownMember {
    s3Bucket?: never;
    firehoseStream?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3Bucket: (value: S3Bucket) => T;
    firehoseStream: (value: FirehoseStream) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Destination, visitor: Visitor<T>): T => {
    if (value.s3Bucket !== undefined) return visitor.s3Bucket(value.s3Bucket);
    if (value.firehoseStream !== undefined) return visitor.firehoseStream(value.firehoseStream);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Contains information about an audit log destination configuration.</p>
 */
export interface AuditLogDestinationConfiguration {
  /**
   * <p>Contains information about an audit log destination.</p>
   */
  destination: Destination | undefined;
}

/**
 * @public
 * @enum
 */
export const Format = {
  JSON: "json",
  PARQUET: "parquet",
} as const;

/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const Schema = {
  OCSF: "ocsf",
  RAW: "raw",
} as const;

/**
 * @public
 */
export type Schema = (typeof Schema)[keyof typeof Schema];

/**
 * @public
 * <p>Contains information about an audit log processing configuration.</p>
 */
export interface AuditLogProcessingConfiguration {
  /**
   * <p>The event schema in which the audit logs need to be formatted.</p>
   */
  schema: Schema | string | undefined;

  /**
   * <p>The format in which the audit logs need to be formatted.</p>
   */
  format: Format | string | undefined;
}

/**
 * @public
 * <p>Contains authorization request information, which is required for Amazon Web Services AppFabric to get the
 *          OAuth2 access token for an application.</p>
 */
export interface AuthRequest {
  /**
   * <p>The redirect URL that is specified in the AuthURL and the application client.</p>
   */
  redirectUri: string | undefined;

  /**
   * <p>The authorization code returned by the application after permission is granted in the
   *          application OAuth page (after clicking on the AuthURL).</p>
   */
  code: string | undefined;
}

/**
 * @public
 */
export interface BatchGetUserAccessTasksRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The tasks IDs to use for the request.</p>
   */
  taskIdList: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResultStatus = {
  COMPLETED: "COMPLETED",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ResultStatus = (typeof ResultStatus)[keyof typeof ResultStatus];

/**
 * @public
 * <p>Contains information about an error returned from a user access task.</p>
 */
export interface TaskError {
  /**
   * <p>The code of the error.</p>
   */
  errorCode?: string;

  /**
   * <p>The message of the error.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p>Contains information about a user's access to an application.</p>
 */
export interface UserAccessResultItem {
  /**
   * <p>The name of the application.</p>
   */
  app?: string;

  /**
   * <p>The ID of the application tenant.</p>
   */
  tenantId?: string;

  /**
   * <p>The display name of the tenant.</p>
   */
  tenantDisplayName?: string;

  /**
   * <p>The unique ID of the task.</p>
   */
  taskId?: string;

  /**
   * <p>The status of the user access result item.</p>
   *          <p>The following states are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The user access task is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>: The user access task completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The user access task failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code>: The user access task expired.</p>
   *             </li>
   *          </ul>
   */
  resultStatus?: ResultStatus | string;

  /**
   * <p>The email address of the target user.</p>
   */
  email?: string;

  /**
   * <p>The unique ID of user.</p>
   */
  userId?: string;

  /**
   * <p>The full name of the user.</p>
   */
  userFullName?: string;

  /**
   * <p>The first name of the user.</p>
   */
  userFirstName?: string;

  /**
   * <p>The last name of the user.</p>
   */
  userLastName?: string;

  /**
   * <p>The status of the user returned by the application.</p>
   */
  userStatus?: string;

  /**
   * <p>Contains information about an error returned from a user access task.</p>
   */
  taskError?: TaskError;
}

/**
 * @public
 */
export interface BatchGetUserAccessTasksResponse {
  /**
   * <p>Contains a list of user access results.</p>
   */
  userAccessResultsList?: UserAccessResultItem[];
}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The period of time after which you should retry your request.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>The specified resource does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>The request rate exceeds the limit.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The code of the service.</p>
   */
  serviceCode?: string;

  /**
   * <p>The code for the quota exceeded.</p>
   */
  quotaCode?: string;

  /**
   * <p>The period of time after which you should retry your request.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>The input failed to meet the constraints specified by the Amazon Web Services service in
 *          a specified field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name where the invalid entry was detected.</p>
   */
  name: string | undefined;

  /**
   * <p>A message about the validation exception.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The request has invalid or missing parameters.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the exception.</p>
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
   * <p>The field list.</p>
   */
  fieldList?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 * <p>The request has created a conflict. Check the request parameters and try again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface ConnectAppAuthorizationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          that contains the app authorization to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app
   *          authorization to use for the request.</p>
   */
  appAuthorizationIdentifier: string | undefined;

  /**
   * <p>Contains OAuth2 authorization information.</p>
   *          <p>This is required if the app authorization for the request is configured with an OAuth2
   *             (<code>oauth2</code>) authorization type.</p>
   */
  authRequest?: AuthRequest;
}

/**
 * @public
 */
export interface ConnectAppAuthorizationResponse {
  /**
   * <p>Contains a summary of the app authorization.</p>
   */
  appAuthorizationSummary: AppAuthorizationSummary | undefined;
}

/**
 * @public
 * <p>Contains OAuth2 client credential information.</p>
 */
export interface Oauth2Credential {
  /**
   * <p>The client ID of the client application.</p>
   */
  clientId: string | undefined;

  /**
   * <p>The client secret of the client application.</p>
   */
  clientSecret: string | undefined;
}

/**
 * @public
 * <p>Contains credential information for an application.</p>
 */
export type Credential =
  | Credential.ApiKeyCredentialMember
  | Credential.Oauth2CredentialMember
  | Credential.$UnknownMember;

/**
 * @public
 */
export namespace Credential {
  /**
   * <p>Contains OAuth2 client credential information.</p>
   */
  export interface Oauth2CredentialMember {
    oauth2Credential: Oauth2Credential;
    apiKeyCredential?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains API key credential information.</p>
   */
  export interface ApiKeyCredentialMember {
    oauth2Credential?: never;
    apiKeyCredential: ApiKeyCredential;
    $unknown?: never;
  }

  export interface $UnknownMember {
    oauth2Credential?: never;
    apiKeyCredential?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    oauth2Credential: (value: Oauth2Credential) => T;
    apiKeyCredential: (value: ApiKeyCredential) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Credential, visitor: Visitor<T>): T => {
    if (value.oauth2Credential !== undefined) return visitor.oauth2Credential(value.oauth2Credential);
    if (value.apiKeyCredential !== undefined) return visitor.apiKeyCredential(value.apiKeyCredential);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The key or keys of the key-value pairs for the tag or tags assigned to a
 *          resource.</p>
 */
export interface Tag {
  /**
   * <p>Tag key.</p>
   */
  key: string | undefined;

  /**
   * <p>Tag value.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateAppAuthorizationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The name of the application.</p>
   *          <p>Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SLACK</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASANA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JIRA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>M365</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>M365AUDITLOGS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ZOOM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ZENDESK</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OKTA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GOOGLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DROPBOX</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMARTSHEET</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CISCO</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  app: string | undefined;

  /**
   * <p>Contains credentials for the application, such as an API key or OAuth2 client ID and
   *          secret.</p>
   *          <p>Specify credentials that match the authorization type for your request. For example, if
   *          the authorization type for your request is OAuth2 (<code>oauth2</code>), then you should
   *          provide only the OAuth2 credentials.</p>
   */
  credential: Credential | undefined;

  /**
   * <p>Contains information about an application tenant, such as the application display name
   *          and identifier.</p>
   */
  tenant: Tenant | undefined;

  /**
   * <p>The authorization type for the app authorization.</p>
   */
  authType: AuthType | string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency
   *          of the request. This lets you safely retry the request without accidentally performing the
   *          same operation a second time. Passing the same value to a later call to an operation
   *          requires that you also pass the same value for all other parameters. We recommend that you
   *          use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *             value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *          you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with different
   *          parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   */
  clientToken?: string;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAppAuthorizationResponse {
  /**
   * <p>Contains information about an app authorization.</p>
   */
  appAuthorization: AppAuthorization | undefined;
}

/**
 * @public
 * <p>The request exceeds a service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The code of the service.</p>
   */
  serviceCode: string | undefined;

  /**
   * <p>The code for the quota exceeded.</p>
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 */
export interface CreateAppBundleRequest {
  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency
   *          of the request. This lets you safely retry the request without accidentally performing the
   *          same operation a second time. Passing the same value to a later call to an operation
   *          requires that you also pass the same value for all other parameters. We recommend that you
   *          use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *             value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *          you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with different
   *          parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to
   *          use to encrypt the application data. If this is not specified, an Amazon Web Services owned key is used for encryption.</p>
   */
  customerManagedKeyIdentifier?: string;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAppBundleResponse {
  /**
   * <p>Contains information about an app bundle.</p>
   */
  appBundle: AppBundle | undefined;
}

/**
 * @public
 * @enum
 */
export const IngestionType = {
  AUDIT_LOG: "auditLog",
} as const;

/**
 * @public
 */
export type IngestionType = (typeof IngestionType)[keyof typeof IngestionType];

/**
 * @public
 */
export interface CreateIngestionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The name of the application.</p>
   *          <p>Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SLACK</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASANA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JIRA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>M365</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>M365AUDITLOGS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ZOOM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ZENDESK</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OKTA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GOOGLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DROPBOX</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMARTSHEET</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CISCO</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  app: string | undefined;

  /**
   * <p>The ID of the application tenant.</p>
   */
  tenantId: string | undefined;

  /**
   * <p>The ingestion type.</p>
   */
  ingestionType: IngestionType | string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency
   *          of the request. This lets you safely retry the request without accidentally performing the
   *          same operation a second time. Passing the same value to a later call to an operation
   *          requires that you also pass the same value for all other parameters. We recommend that you
   *          use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *             value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *          you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with different
   *          parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   */
  clientToken?: string;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const IngestionState = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type IngestionState = (typeof IngestionState)[keyof typeof IngestionState];

/**
 * @public
 * <p>Contains information about an ingestion.</p>
 */
export interface Ingestion {
  /**
   * <p>The Amazon Resource Name (ARN) of the ingestion.</p>
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the app bundle for the ingestion.</p>
   */
  appBundleArn: string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  app: string | undefined;

  /**
   * <p>The ID of the application tenant.</p>
   */
  tenantId: string | undefined;

  /**
   * <p>The timestamp of when the ingestion was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the ingestion was last updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The status of the ingestion.</p>
   */
  state: IngestionState | string | undefined;

  /**
   * <p>The type of the ingestion.</p>
   */
  ingestionType: IngestionType | string | undefined;
}

/**
 * @public
 */
export interface CreateIngestionResponse {
  /**
   * <p>Contains information about an ingestion.</p>
   */
  ingestion: Ingestion | undefined;
}

/**
 * @public
 * <p>Contains information about the destination of ingested data.</p>
 */
export type DestinationConfiguration =
  | DestinationConfiguration.AuditLogMember
  | DestinationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace DestinationConfiguration {
  /**
   * <p>Contains information about an audit log destination configuration.</p>
   */
  export interface AuditLogMember {
    auditLog: AuditLogDestinationConfiguration;
    $unknown?: never;
  }

  export interface $UnknownMember {
    auditLog?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    auditLog: (value: AuditLogDestinationConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DestinationConfiguration, visitor: Visitor<T>): T => {
    if (value.auditLog !== undefined) return visitor.auditLog(value.auditLog);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Contains information about how ingested data is processed.</p>
 */
export type ProcessingConfiguration = ProcessingConfiguration.AuditLogMember | ProcessingConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProcessingConfiguration {
  /**
   * <p>Contains information about an audit log processing configuration.</p>
   */
  export interface AuditLogMember {
    auditLog: AuditLogProcessingConfiguration;
    $unknown?: never;
  }

  export interface $UnknownMember {
    auditLog?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    auditLog: (value: AuditLogProcessingConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProcessingConfiguration, visitor: Visitor<T>): T => {
    if (value.auditLog !== undefined) return visitor.auditLog(value.auditLog);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateIngestionDestinationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to
   *          use for the request.</p>
   */
  ingestionIdentifier: string | undefined;

  /**
   * <p>Contains information about how ingested data is processed.</p>
   */
  processingConfiguration: ProcessingConfiguration | undefined;

  /**
   * <p>Contains information about the destination of ingested data.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency
   *          of the request. This lets you safely retry the request without accidentally performing the
   *          same operation a second time. Passing the same value to a later call to an operation
   *          requires that you also pass the same value for all other parameters. We recommend that you
   *          use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *             value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *          you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with different
   *          parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   */
  clientToken?: string;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const IngestionDestinationStatus = {
  ACTIVE: "Active",
  FAILED: "Failed",
} as const;

/**
 * @public
 */
export type IngestionDestinationStatus = (typeof IngestionDestinationStatus)[keyof typeof IngestionDestinationStatus];

/**
 * @public
 * <p>Contains information about an ingestion destination.</p>
 */
export interface IngestionDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the ingestion destination.</p>
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ingestion.</p>
   */
  ingestionArn: string | undefined;

  /**
   * <p>Contains information about how ingested data is processed.</p>
   */
  processingConfiguration: ProcessingConfiguration | undefined;

  /**
   * <p>Contains information about the destination of ingested data.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>The state of the ingestion destination.</p>
   *          <p>The following states are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Active</code>: The ingestion destination is active and is ready to be
   *                used.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The ingestion destination has failed. If the ingestion
   *                destination is in this state, you should verify the ingestion destination
   *                configuration and try again.</p>
   *             </li>
   *          </ul>
   */
  status?: IngestionDestinationStatus | string;

  /**
   * <p>The reason for the current status of the ingestion destination.</p>
   *          <p>Only present when the <code>status</code> of ingestion destination is
   *             <code>Failed</code>.</p>
   */
  statusReason?: string;

  /**
   * <p>The timestamp of when the ingestion destination was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the ingestion destination was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface CreateIngestionDestinationResponse {
  /**
   * <p>Contains information about an ingestion destination.</p>
   */
  ingestionDestination: IngestionDestination | undefined;
}

/**
 * @public
 */
export interface DeleteAppAuthorizationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app
   *          authorization to use for the request.</p>
   */
  appAuthorizationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppAuthorizationResponse {}

/**
 * @public
 */
export interface DeleteAppBundleRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the app bundle that needs to be deleted.</p>
   */
  appBundleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppBundleResponse {}

/**
 * @public
 */
export interface DeleteIngestionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to
   *          use for the request.</p>
   */
  ingestionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIngestionResponse {}

/**
 * @public
 */
export interface DeleteIngestionDestinationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to
   *          use for the request.</p>
   */
  ingestionIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion
   *          destination to use for the request.</p>
   */
  ingestionDestinationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIngestionDestinationResponse {}

/**
 * @public
 */
export interface GetAppAuthorizationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app
   *          authorization to use for the request.</p>
   */
  appAuthorizationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAppAuthorizationResponse {
  /**
   * <p>Contains information about an app authorization.</p>
   */
  appAuthorization: AppAuthorization | undefined;
}

/**
 * @public
 */
export interface GetAppBundleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAppBundleResponse {
  /**
   * <p>Contains information about an app bundle.</p>
   */
  appBundle: AppBundle | undefined;
}

/**
 * @public
 */
export interface GetIngestionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to
   *          use for the request.</p>
   */
  ingestionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIngestionResponse {
  /**
   * <p>Contains information about an ingestion.</p>
   */
  ingestion: Ingestion | undefined;
}

/**
 * @public
 */
export interface GetIngestionDestinationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to
   *          use for the request.</p>
   */
  ingestionIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion
   *          destination to use for the request.</p>
   */
  ingestionDestinationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIngestionDestinationResponse {
  /**
   * <p>Contains information about an ingestion destination.</p>
   */
  ingestionDestination: IngestionDestination | undefined;
}

/**
 * @public
 */
export interface ListAppAuthorizationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *          fewer than the specified maximum.</p>
   */
  maxResults?: number;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppAuthorizationsResponse {
  /**
   * <p>Contains a list of app authorization summaries.</p>
   */
  appAuthorizationSummaryList: AppAuthorizationSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppBundlesRequest {
  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *          fewer than the specified maximum.</p>
   */
  maxResults?: number;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppBundlesResponse {
  /**
   * <p>Contains a list of app bundle summaries.</p>
   */
  appBundleSummaryList: AppBundleSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIngestionDestinationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to
   *          use for the request.</p>
   */
  ingestionIdentifier: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *          fewer than the specified maximum.</p>
   */
  maxResults?: number;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Contains a summary of an ingestion destination.</p>
 */
export interface IngestionDestinationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the ingestion destination.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListIngestionDestinationsResponse {
  /**
   * <p>Contains a list of ingestion destination summaries.</p>
   */
  ingestionDestinations: IngestionDestinationSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIngestionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *             <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *          fewer than the specified maximum.</p>
   */
  maxResults?: number;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Contains a summary of an ingestion.</p>
 */
export interface IngestionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the ingestion.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  app: string | undefined;

  /**
   * <p>The ID of the application tenant.</p>
   */
  tenantId: string | undefined;

  /**
   * <p>The status of the ingestion.</p>
   */
  state: IngestionState | string | undefined;
}

/**
 * @public
 */
export interface ListIngestionsResponse {
  /**
   * <p>Contains a list of ingestion summaries.</p>
   */
  ingestions: IngestionSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to retrieve
   *          tags.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface StartIngestionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to
   *          use for the request.</p>
   */
  ingestionIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartIngestionResponse {}

/**
 * @public
 */
export interface StartUserAccessTasksRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The email address of the target user.</p>
   */
  email: string | undefined;
}

/**
 * @public
 * <p>Contains information about a user access task.</p>
 */
export interface UserAccessTaskItem {
  /**
   * <p>The name of the application.</p>
   */
  app: string | undefined;

  /**
   * <p>The ID of the application tenant.</p>
   */
  tenantId: string | undefined;

  /**
   * <p>The unique ID of the task.</p>
   */
  taskId?: string;

  /**
   * <p>Error from the task, if any.</p>
   */
  error?: TaskError;
}

/**
 * @public
 */
export interface StartUserAccessTasksResponse {
  /**
   * <p>Contains a list of user access task information.</p>
   */
  userAccessTasksList?: UserAccessTaskItem[];
}

/**
 * @public
 */
export interface StopIngestionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to
   *          use for the request.</p>
   */
  ingestionIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopIngestionResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the key-value pairs for the tag or tags you want to remove from the
   *          specified resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAppAuthorizationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app
   *          authorization to use for the request.</p>
   */
  appAuthorizationIdentifier: string | undefined;

  /**
   * <p>Contains credentials for the application, such as an API key or OAuth2 client ID and
   *          secret.</p>
   *          <p>Specify credentials that match the authorization type of the app authorization to
   *          update. For example, if the authorization type of the app authorization is OAuth2
   *             (<code>oauth2</code>), then you should provide only the OAuth2 credentials.</p>
   */
  credential?: Credential;

  /**
   * <p>Contains information about an application tenant, such as the application display name
   *          and identifier.</p>
   */
  tenant?: Tenant;
}

/**
 * @public
 */
export interface UpdateAppAuthorizationResponse {
  /**
   * <p>Contains information about an app authorization.</p>
   */
  appAuthorization: AppAuthorization | undefined;
}

/**
 * @public
 */
export interface UpdateIngestionDestinationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle
   *          to use for the request.</p>
   */
  appBundleIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to
   *          use for the request.</p>
   */
  ingestionIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion
   *          destination to use for the request.</p>
   */
  ingestionDestinationIdentifier: string | undefined;

  /**
   * <p>Contains information about the destination of ingested data.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateIngestionDestinationResponse {
  /**
   * <p>Contains information about an ingestion destination.</p>
   */
  ingestionDestination: IngestionDestination | undefined;
}

/**
 * @internal
 */
export const ApiKeyCredentialFilterSensitiveLog = (obj: ApiKeyCredential): any => ({
  ...obj,
  ...(obj.apiKey && { apiKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AuthRequestFilterSensitiveLog = (obj: AuthRequest): any => ({
  ...obj,
  ...(obj.code && { code: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserAccessResultItemFilterSensitiveLog = (obj: UserAccessResultItem): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
  ...(obj.userId && { userId: SENSITIVE_STRING }),
  ...(obj.userFullName && { userFullName: SENSITIVE_STRING }),
  ...(obj.userFirstName && { userFirstName: SENSITIVE_STRING }),
  ...(obj.userLastName && { userLastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchGetUserAccessTasksResponseFilterSensitiveLog = (obj: BatchGetUserAccessTasksResponse): any => ({
  ...obj,
  ...(obj.userAccessResultsList && {
    userAccessResultsList: obj.userAccessResultsList.map((item) => UserAccessResultItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ConnectAppAuthorizationRequestFilterSensitiveLog = (obj: ConnectAppAuthorizationRequest): any => ({
  ...obj,
  ...(obj.authRequest && { authRequest: AuthRequestFilterSensitiveLog(obj.authRequest) }),
});

/**
 * @internal
 */
export const Oauth2CredentialFilterSensitiveLog = (obj: Oauth2Credential): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CredentialFilterSensitiveLog = (obj: Credential): any => {
  if (obj.oauth2Credential !== undefined)
    return { oauth2Credential: Oauth2CredentialFilterSensitiveLog(obj.oauth2Credential) };
  if (obj.apiKeyCredential !== undefined)
    return { apiKeyCredential: ApiKeyCredentialFilterSensitiveLog(obj.apiKeyCredential) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateAppAuthorizationRequestFilterSensitiveLog = (obj: CreateAppAuthorizationRequest): any => ({
  ...obj,
  ...(obj.credential && { credential: CredentialFilterSensitiveLog(obj.credential) }),
});

/**
 * @internal
 */
export const StartUserAccessTasksRequestFilterSensitiveLog = (obj: StartUserAccessTasksRequest): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppAuthorizationRequestFilterSensitiveLog = (obj: UpdateAppAuthorizationRequest): any => ({
  ...obj,
  ...(obj.credential && { credential: CredentialFilterSensitiveLog(obj.credential) }),
});
