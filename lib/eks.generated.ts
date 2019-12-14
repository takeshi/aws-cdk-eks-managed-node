// Copyright 2012-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Generated from the AWS CloudFormation Resource Specification
// See: docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-resource-specification.html
// @cfn2ts:meta@ {"generated":"2019-12-14T02:39:45.215Z","fingerprint":"durP1sP93J9WYR4O/YTqxKi+3Z/LRd4xSDxwomE0vFQ="}

// tslint:disable:max-line-length | This is generated code - line lengths are difficult to control

import cdk = require('@aws-cdk/core');

/**
 * Properties for defining a `AWS::EKS::Cluster`
 *
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html
 */
export interface CfnClusterProps {

    /**
     * `AWS::EKS::Cluster.ResourcesVpcConfig`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig
     */
    readonly resourcesVpcConfig: CfnCluster.ResourcesVpcConfigProperty | cdk.IResolvable;

    /**
     * `AWS::EKS::Cluster.RoleArn`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-rolearn
     */
    readonly roleArn: string;

    /**
     * `AWS::EKS::Cluster.Name`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-name
     */
    readonly name?: string;

    /**
     * `AWS::EKS::Cluster.Version`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-version
     */
    readonly version?: string;
}

/**
 * Determine whether the given properties match those of a `CfnClusterProps`
 *
 * @param properties - the TypeScript properties of a `CfnClusterProps`
 *
 * @returns the result of the validation.
 */
function CfnClusterPropsValidator(properties: any): cdk.ValidationResult {
    if (!cdk.canInspect(properties)) { return cdk.VALIDATION_SUCCESS; }
    const errors = new cdk.ValidationResults();
    errors.collect(cdk.propertyValidator('name', cdk.validateString)(properties.name));
    errors.collect(cdk.propertyValidator('resourcesVpcConfig', cdk.requiredValidator)(properties.resourcesVpcConfig));
    errors.collect(cdk.propertyValidator('resourcesVpcConfig', CfnCluster_ResourcesVpcConfigPropertyValidator)(properties.resourcesVpcConfig));
    errors.collect(cdk.propertyValidator('roleArn', cdk.requiredValidator)(properties.roleArn));
    errors.collect(cdk.propertyValidator('roleArn', cdk.validateString)(properties.roleArn));
    errors.collect(cdk.propertyValidator('version', cdk.validateString)(properties.version));
    return errors.wrap('supplied properties not correct for "CfnClusterProps"');
}

/**
 * Renders the AWS CloudFormation properties of an `AWS::EKS::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `CfnClusterProps`
 *
 * @returns the AWS CloudFormation properties of an `AWS::EKS::Cluster` resource.
 */
// @ts-ignore TS6133
function cfnClusterPropsToCloudFormation(properties: any): any {
    if (!cdk.canInspect(properties)) { return properties; }
    CfnClusterPropsValidator(properties).assertSuccess();
    return {
      ResourcesVpcConfig: cfnClusterResourcesVpcConfigPropertyToCloudFormation(properties.resourcesVpcConfig),
      RoleArn: cdk.stringToCloudFormation(properties.roleArn),
      Name: cdk.stringToCloudFormation(properties.name),
      Version: cdk.stringToCloudFormation(properties.version),
    };
}

/**
 * A CloudFormation `AWS::EKS::Cluster`
 *
 * @cloudformationResource AWS::EKS::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html
 */
export class CfnCluster extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    public static readonly CFN_RESOURCE_TYPE_NAME = "AWS::EKS::Cluster";

    /**
     * @cloudformationAttribute Arn
     */
    public readonly attrArn: string;

    /**
     * @cloudformationAttribute CertificateAuthorityData
     */
    public readonly attrCertificateAuthorityData: string;

    /**
     * @cloudformationAttribute ClusterSecurityGroupId
     */
    public readonly attrClusterSecurityGroupId: string;

    /**
     * @cloudformationAttribute Endpoint
     */
    public readonly attrEndpoint: string;

    /**
     * `AWS::EKS::Cluster.ResourcesVpcConfig`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig
     */
    public resourcesVpcConfig: CfnCluster.ResourcesVpcConfigProperty | cdk.IResolvable;

    /**
     * `AWS::EKS::Cluster.RoleArn`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-rolearn
     */
    public roleArn: string;

    /**
     * `AWS::EKS::Cluster.Name`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-name
     */
    public name: string | undefined;

    /**
     * `AWS::EKS::Cluster.Version`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-version
     */
    public version: string | undefined;

    /**
     * Create a new `AWS::EKS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: cdk.Construct, id: string, props: CfnClusterProps) {
        super(scope, id, { type: CfnCluster.CFN_RESOURCE_TYPE_NAME, properties: props });
        cdk.requireProperty(props, 'resourcesVpcConfig', this);
        cdk.requireProperty(props, 'roleArn', this);
        this.attrArn = cdk.Token.asString(this.getAtt('Arn'));
        this.attrCertificateAuthorityData = cdk.Token.asString(this.getAtt('CertificateAuthorityData'));
        this.attrClusterSecurityGroupId = cdk.Token.asString(this.getAtt('ClusterSecurityGroupId'));
        this.attrEndpoint = cdk.Token.asString(this.getAtt('Endpoint'));

        this.resourcesVpcConfig = props.resourcesVpcConfig;
        this.roleArn = props.roleArn;
        this.name = props.name;
        this.version = props.version;
    }

    /**
     * Examines the CloudFormation resource and discloses attributes.
     *
     * @param inspector - tree inspector to collect and process attributes
     *
     * @stability experimental
     */
    public inspect(inspector: cdk.TreeInspector) {
        inspector.addAttribute("aws:cdk:cloudformation:type", CfnCluster.CFN_RESOURCE_TYPE_NAME);
        inspector.addAttribute("aws:cdk:cloudformation:props", this.cfnProperties);
    }

    protected get cfnProperties(): { [key: string]: any }  {
        return {
            resourcesVpcConfig: this.resourcesVpcConfig,
            roleArn: this.roleArn,
            name: this.name,
            version: this.version,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return cfnClusterPropsToCloudFormation(props);
    }
}

export namespace CfnCluster {
    /**
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html
     */
    export interface ResourcesVpcConfigProperty {
        /**
         * `CfnCluster.ResourcesVpcConfigProperty.SecurityGroupIds`
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-securitygroupids
         */
        readonly securityGroupIds?: string[];
        /**
         * `CfnCluster.ResourcesVpcConfigProperty.SubnetIds`
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-subnetids
         */
        readonly subnetIds: string[];
    }
}

/**
 * Determine whether the given properties match those of a `ResourcesVpcConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesVpcConfigProperty`
 *
 * @returns the result of the validation.
 */
function CfnCluster_ResourcesVpcConfigPropertyValidator(properties: any): cdk.ValidationResult {
    if (!cdk.canInspect(properties)) { return cdk.VALIDATION_SUCCESS; }
    const errors = new cdk.ValidationResults();
    errors.collect(cdk.propertyValidator('securityGroupIds', cdk.listValidator(cdk.validateString))(properties.securityGroupIds));
    errors.collect(cdk.propertyValidator('subnetIds', cdk.requiredValidator)(properties.subnetIds));
    errors.collect(cdk.propertyValidator('subnetIds', cdk.listValidator(cdk.validateString))(properties.subnetIds));
    return errors.wrap('supplied properties not correct for "ResourcesVpcConfigProperty"');
}

/**
 * Renders the AWS CloudFormation properties of an `AWS::EKS::Cluster.ResourcesVpcConfig` resource
 *
 * @param properties - the TypeScript properties of a `ResourcesVpcConfigProperty`
 *
 * @returns the AWS CloudFormation properties of an `AWS::EKS::Cluster.ResourcesVpcConfig` resource.
 */
// @ts-ignore TS6133
function cfnClusterResourcesVpcConfigPropertyToCloudFormation(properties: any): any {
    if (!cdk.canInspect(properties)) { return properties; }
    CfnCluster_ResourcesVpcConfigPropertyValidator(properties).assertSuccess();
    return {
      SecurityGroupIds: cdk.listMapper(cdk.stringToCloudFormation)(properties.securityGroupIds),
      SubnetIds: cdk.listMapper(cdk.stringToCloudFormation)(properties.subnetIds),
    };
}

/**
 * Properties for defining a `AWS::EKS::Nodegroup`
 *
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html
 */
export interface CfnNodegroupProps {

    /**
     * `AWS::EKS::Nodegroup.ClusterName`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-clustername
     */
    readonly clusterName: string;

    /**
     * `AWS::EKS::Nodegroup.NodeRole`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-noderole
     */
    readonly nodeRole: string;

    /**
     * `AWS::EKS::Nodegroup.Subnets`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-subnets
     */
    readonly subnets: string[];

    /**
     * `AWS::EKS::Nodegroup.AmiType`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-amitype
     */
    readonly amiType?: string;

    /**
     * `AWS::EKS::Nodegroup.DiskSize`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-disksize
     */
    readonly diskSize?: number;

    /**
     * `AWS::EKS::Nodegroup.ForceUpdateEnabled`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-forceupdateenabled
     */
    readonly forceUpdateEnabled?: boolean | cdk.IResolvable;

    /**
     * `AWS::EKS::Nodegroup.InstanceTypes`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-instancetypes
     */
    readonly instanceTypes?: string[];

    /**
     * `AWS::EKS::Nodegroup.Labels`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-labels
     */
    readonly labels?: any | cdk.IResolvable;

    /**
     * `AWS::EKS::Nodegroup.NodegroupName`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-nodegroupname
     */
    readonly nodegroupName?: string;

    /**
     * `AWS::EKS::Nodegroup.ReleaseVersion`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-releaseversion
     */
    readonly releaseVersion?: string;

    /**
     * `AWS::EKS::Nodegroup.RemoteAccess`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-remoteaccess
     */
    readonly remoteAccess?: CfnNodegroup.RemoteAccessProperty | cdk.IResolvable;

    /**
     * `AWS::EKS::Nodegroup.ScalingConfig`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-scalingconfig
     */
    readonly scalingConfig?: CfnNodegroup.ScalingConfigProperty | cdk.IResolvable;

    /**
     * `AWS::EKS::Nodegroup.Tags`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-tags
     */
    readonly tags?: any;

    /**
     * `AWS::EKS::Nodegroup.Version`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-version
     */
    readonly version?: string;
}

/**
 * Determine whether the given properties match those of a `CfnNodegroupProps`
 *
 * @param properties - the TypeScript properties of a `CfnNodegroupProps`
 *
 * @returns the result of the validation.
 */
function CfnNodegroupPropsValidator(properties: any): cdk.ValidationResult {
    if (!cdk.canInspect(properties)) { return cdk.VALIDATION_SUCCESS; }
    const errors = new cdk.ValidationResults();
    errors.collect(cdk.propertyValidator('amiType', cdk.validateString)(properties.amiType));
    errors.collect(cdk.propertyValidator('clusterName', cdk.requiredValidator)(properties.clusterName));
    errors.collect(cdk.propertyValidator('clusterName', cdk.validateString)(properties.clusterName));
    errors.collect(cdk.propertyValidator('diskSize', cdk.validateNumber)(properties.diskSize));
    errors.collect(cdk.propertyValidator('forceUpdateEnabled', cdk.validateBoolean)(properties.forceUpdateEnabled));
    errors.collect(cdk.propertyValidator('instanceTypes', cdk.listValidator(cdk.validateString))(properties.instanceTypes));
    errors.collect(cdk.propertyValidator('labels', cdk.validateObject)(properties.labels));
    errors.collect(cdk.propertyValidator('nodeRole', cdk.requiredValidator)(properties.nodeRole));
    errors.collect(cdk.propertyValidator('nodeRole', cdk.validateString)(properties.nodeRole));
    errors.collect(cdk.propertyValidator('nodegroupName', cdk.validateString)(properties.nodegroupName));
    errors.collect(cdk.propertyValidator('releaseVersion', cdk.validateString)(properties.releaseVersion));
    errors.collect(cdk.propertyValidator('remoteAccess', CfnNodegroup_RemoteAccessPropertyValidator)(properties.remoteAccess));
    errors.collect(cdk.propertyValidator('scalingConfig', CfnNodegroup_ScalingConfigPropertyValidator)(properties.scalingConfig));
    errors.collect(cdk.propertyValidator('subnets', cdk.requiredValidator)(properties.subnets));
    errors.collect(cdk.propertyValidator('subnets', cdk.listValidator(cdk.validateString))(properties.subnets));
    errors.collect(cdk.propertyValidator('tags', cdk.validateObject)(properties.tags));
    errors.collect(cdk.propertyValidator('version', cdk.validateString)(properties.version));
    return errors.wrap('supplied properties not correct for "CfnNodegroupProps"');
}

/**
 * Renders the AWS CloudFormation properties of an `AWS::EKS::Nodegroup` resource
 *
 * @param properties - the TypeScript properties of a `CfnNodegroupProps`
 *
 * @returns the AWS CloudFormation properties of an `AWS::EKS::Nodegroup` resource.
 */
// @ts-ignore TS6133
function cfnNodegroupPropsToCloudFormation(properties: any): any {
    if (!cdk.canInspect(properties)) { return properties; }
    CfnNodegroupPropsValidator(properties).assertSuccess();
    return {
      ClusterName: cdk.stringToCloudFormation(properties.clusterName),
      NodeRole: cdk.stringToCloudFormation(properties.nodeRole),
      Subnets: cdk.listMapper(cdk.stringToCloudFormation)(properties.subnets),
      AmiType: cdk.stringToCloudFormation(properties.amiType),
      DiskSize: cdk.numberToCloudFormation(properties.diskSize),
      ForceUpdateEnabled: cdk.booleanToCloudFormation(properties.forceUpdateEnabled),
      InstanceTypes: cdk.listMapper(cdk.stringToCloudFormation)(properties.instanceTypes),
      Labels: cdk.objectToCloudFormation(properties.labels),
      NodegroupName: cdk.stringToCloudFormation(properties.nodegroupName),
      ReleaseVersion: cdk.stringToCloudFormation(properties.releaseVersion),
      RemoteAccess: cfnNodegroupRemoteAccessPropertyToCloudFormation(properties.remoteAccess),
      ScalingConfig: cfnNodegroupScalingConfigPropertyToCloudFormation(properties.scalingConfig),
      Tags: cdk.objectToCloudFormation(properties.tags),
      Version: cdk.stringToCloudFormation(properties.version),
    };
}

/**
 * A CloudFormation `AWS::EKS::Nodegroup`
 *
 * @cloudformationResource AWS::EKS::Nodegroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html
 */
export class CfnNodegroup extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    public static readonly CFN_RESOURCE_TYPE_NAME = "AWS::EKS::Nodegroup";

    /**
     * @cloudformationAttribute Arn
     */
    public readonly attrArn: string;

    /**
     * @cloudformationAttribute ClusterName
     */
    public readonly attrClusterName: string;

    /**
     * @cloudformationAttribute NodegroupName
     */
    public readonly attrNodegroupName: string;

    /**
     * `AWS::EKS::Nodegroup.ClusterName`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-clustername
     */
    public clusterName: string;

    /**
     * `AWS::EKS::Nodegroup.NodeRole`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-noderole
     */
    public nodeRole: string;

    /**
     * `AWS::EKS::Nodegroup.Subnets`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-subnets
     */
    public subnets: string[];

    /**
     * `AWS::EKS::Nodegroup.AmiType`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-amitype
     */
    public amiType: string | undefined;

    /**
     * `AWS::EKS::Nodegroup.DiskSize`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-disksize
     */
    public diskSize: number | undefined;

    /**
     * `AWS::EKS::Nodegroup.ForceUpdateEnabled`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-forceupdateenabled
     */
    public forceUpdateEnabled: boolean | cdk.IResolvable | undefined;

    /**
     * `AWS::EKS::Nodegroup.InstanceTypes`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-instancetypes
     */
    public instanceTypes: string[] | undefined;

    /**
     * `AWS::EKS::Nodegroup.Labels`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-labels
     */
    public labels: any | cdk.IResolvable | undefined;

    /**
     * `AWS::EKS::Nodegroup.NodegroupName`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-nodegroupname
     */
    public nodegroupName: string | undefined;

    /**
     * `AWS::EKS::Nodegroup.ReleaseVersion`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-releaseversion
     */
    public releaseVersion: string | undefined;

    /**
     * `AWS::EKS::Nodegroup.RemoteAccess`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-remoteaccess
     */
    public remoteAccess: CfnNodegroup.RemoteAccessProperty | cdk.IResolvable | undefined;

    /**
     * `AWS::EKS::Nodegroup.ScalingConfig`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-scalingconfig
     */
    public scalingConfig: CfnNodegroup.ScalingConfigProperty | cdk.IResolvable | undefined;

    /**
     * `AWS::EKS::Nodegroup.Tags`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-tags
     */
    public readonly tags: cdk.TagManager;

    /**
     * `AWS::EKS::Nodegroup.Version`
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-version
     */
    public version: string | undefined;

    /**
     * Create a new `AWS::EKS::Nodegroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: cdk.Construct, id: string, props: CfnNodegroupProps) {
        super(scope, id, { type: CfnNodegroup.CFN_RESOURCE_TYPE_NAME, properties: props });
        cdk.requireProperty(props, 'clusterName', this);
        cdk.requireProperty(props, 'nodeRole', this);
        cdk.requireProperty(props, 'subnets', this);
        this.attrArn = cdk.Token.asString(this.getAtt('Arn'));
        this.attrClusterName = cdk.Token.asString(this.getAtt('ClusterName'));
        this.attrNodegroupName = cdk.Token.asString(this.getAtt('NodegroupName'));

        this.clusterName = props.clusterName;
        this.nodeRole = props.nodeRole;
        this.subnets = props.subnets;
        this.amiType = props.amiType;
        this.diskSize = props.diskSize;
        this.forceUpdateEnabled = props.forceUpdateEnabled;
        this.instanceTypes = props.instanceTypes;
        this.labels = props.labels;
        this.nodegroupName = props.nodegroupName;
        this.releaseVersion = props.releaseVersion;
        this.remoteAccess = props.remoteAccess;
        this.scalingConfig = props.scalingConfig;
        this.tags = new cdk.TagManager(cdk.TagType.MAP, "AWS::EKS::Nodegroup", props.tags);
        this.version = props.version;
    }

    /**
     * Examines the CloudFormation resource and discloses attributes.
     *
     * @param inspector - tree inspector to collect and process attributes
     *
     * @stability experimental
     */
    public inspect(inspector: cdk.TreeInspector) {
        inspector.addAttribute("aws:cdk:cloudformation:type", CfnNodegroup.CFN_RESOURCE_TYPE_NAME);
        inspector.addAttribute("aws:cdk:cloudformation:props", this.cfnProperties);
    }

    protected get cfnProperties(): { [key: string]: any }  {
        return {
            clusterName: this.clusterName,
            nodeRole: this.nodeRole,
            subnets: this.subnets,
            amiType: this.amiType,
            diskSize: this.diskSize,
            forceUpdateEnabled: this.forceUpdateEnabled,
            instanceTypes: this.instanceTypes,
            labels: this.labels,
            nodegroupName: this.nodegroupName,
            releaseVersion: this.releaseVersion,
            remoteAccess: this.remoteAccess,
            scalingConfig: this.scalingConfig,
            tags: this.tags.renderTags(),
            version: this.version,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return cfnNodegroupPropsToCloudFormation(props);
    }
}

export namespace CfnNodegroup {
    /**
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html
     */
    export interface RemoteAccessProperty {
        /**
         * `CfnNodegroup.RemoteAccessProperty.Ec2SshKey`
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html#cfn-eks-nodegroup-remoteaccess-ec2sshkey
         */
        readonly ec2SshKey: string;
        /**
         * `CfnNodegroup.RemoteAccessProperty.SourceSecurityGroups`
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html#cfn-eks-nodegroup-remoteaccess-sourcesecuritygroups
         */
        readonly sourceSecurityGroups?: string[];
    }
}

/**
 * Determine whether the given properties match those of a `RemoteAccessProperty`
 *
 * @param properties - the TypeScript properties of a `RemoteAccessProperty`
 *
 * @returns the result of the validation.
 */
function CfnNodegroup_RemoteAccessPropertyValidator(properties: any): cdk.ValidationResult {
    if (!cdk.canInspect(properties)) { return cdk.VALIDATION_SUCCESS; }
    const errors = new cdk.ValidationResults();
    errors.collect(cdk.propertyValidator('ec2SshKey', cdk.requiredValidator)(properties.ec2SshKey));
    errors.collect(cdk.propertyValidator('ec2SshKey', cdk.validateString)(properties.ec2SshKey));
    errors.collect(cdk.propertyValidator('sourceSecurityGroups', cdk.listValidator(cdk.validateString))(properties.sourceSecurityGroups));
    return errors.wrap('supplied properties not correct for "RemoteAccessProperty"');
}

/**
 * Renders the AWS CloudFormation properties of an `AWS::EKS::Nodegroup.RemoteAccess` resource
 *
 * @param properties - the TypeScript properties of a `RemoteAccessProperty`
 *
 * @returns the AWS CloudFormation properties of an `AWS::EKS::Nodegroup.RemoteAccess` resource.
 */
// @ts-ignore TS6133
function cfnNodegroupRemoteAccessPropertyToCloudFormation(properties: any): any {
    if (!cdk.canInspect(properties)) { return properties; }
    CfnNodegroup_RemoteAccessPropertyValidator(properties).assertSuccess();
    return {
      Ec2SshKey: cdk.stringToCloudFormation(properties.ec2SshKey),
      SourceSecurityGroups: cdk.listMapper(cdk.stringToCloudFormation)(properties.sourceSecurityGroups),
    };
}

export namespace CfnNodegroup {
    /**
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html
     */
    export interface ScalingConfigProperty {
        /**
         * `CfnNodegroup.ScalingConfigProperty.DesiredSize`
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html#cfn-eks-nodegroup-scalingconfig-desiredsize
         */
        readonly desiredSize?: number;
        /**
         * `CfnNodegroup.ScalingConfigProperty.MaxSize`
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html#cfn-eks-nodegroup-scalingconfig-maxsize
         */
        readonly maxSize?: number;
        /**
         * `CfnNodegroup.ScalingConfigProperty.MinSize`
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html#cfn-eks-nodegroup-scalingconfig-minsize
         */
        readonly minSize?: number;
    }
}

/**
 * Determine whether the given properties match those of a `ScalingConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ScalingConfigProperty`
 *
 * @returns the result of the validation.
 */
function CfnNodegroup_ScalingConfigPropertyValidator(properties: any): cdk.ValidationResult {
    if (!cdk.canInspect(properties)) { return cdk.VALIDATION_SUCCESS; }
    const errors = new cdk.ValidationResults();
    errors.collect(cdk.propertyValidator('desiredSize', cdk.validateNumber)(properties.desiredSize));
    errors.collect(cdk.propertyValidator('maxSize', cdk.validateNumber)(properties.maxSize));
    errors.collect(cdk.propertyValidator('minSize', cdk.validateNumber)(properties.minSize));
    return errors.wrap('supplied properties not correct for "ScalingConfigProperty"');
}

/**
 * Renders the AWS CloudFormation properties of an `AWS::EKS::Nodegroup.ScalingConfig` resource
 *
 * @param properties - the TypeScript properties of a `ScalingConfigProperty`
 *
 * @returns the AWS CloudFormation properties of an `AWS::EKS::Nodegroup.ScalingConfig` resource.
 */
// @ts-ignore TS6133
function cfnNodegroupScalingConfigPropertyToCloudFormation(properties: any): any {
    if (!cdk.canInspect(properties)) { return properties; }
    CfnNodegroup_ScalingConfigPropertyValidator(properties).assertSuccess();
    return {
      DesiredSize: cdk.numberToCloudFormation(properties.desiredSize),
      MaxSize: cdk.numberToCloudFormation(properties.maxSize),
      MinSize: cdk.numberToCloudFormation(properties.minSize),
    };
}
