
import { ApiClient } from 'src/network';
import * as model from '../base/model';
import type * as schema from '../base/schema';
import { service } from '@/di/decorator/service';
import { PageRequestMeta } from '@/network/interceptors/PageResultHack';

/**
 * 奥集能内核api
 */
@service(["ApiClient"])
export default class KernelApi {

  private readonly client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  /**
   * 创建日志记录
   * @param {model.LogModel} params 请求参数
   * @returns {model.ResultType<schema.XLog>} 请求结果
   */
  public async createLog(params: model.LogModel): Promise<model.ResultType<schema.XLog>> {
    return await this.client.requestKernel({
      module: 'core',
      action: 'CreateLog',
      params: params,
    });
  }
  /**
   * 查询日志记录
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XLogArray>} 请求结果
   */
  public async queryLogs(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XLogArray>> {
    return await this.client.requestKernel({
      module: 'core',
      action: 'QueryLogs',
      params: params,
    });
  }
  /**
   * 创建权限
   * @param {model.AuthorityModel} params 请求参数
   * @returns {model.ResultType<schema.XAuthority>} 请求结果
   */
  public async createAuthority(
    params: model.AuthorityModel,
  ): Promise<model.ResultType<schema.XAuthority>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'CreateAuthority',
      params: params,
    });
  }
  /**
   * 创建身份
   * @param {model.IdentityModel} params 请求参数
   * @returns {model.ResultType<schema.XIdentity>} 请求结果
   */
  public async createIdentity(
    params: model.IdentityModel,
  ): Promise<model.ResultType<schema.XIdentity>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'CreateIdentity',
      params: params,
    });
  }
  /**
   * 创建用户
   * @param {model.TargetModel} params 请求参数
   * @returns {model.ResultType<schema.XTarget>} 请求结果
   */
  public async createTarget(
    params: model.TargetModel,
  ): Promise<model.ResultType<schema.XTarget>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'CreateTarget',
      params: params,
    });
  }
  /**
   * 删除权限
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteAuthority(
    params: model.IdModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'DeleteAuthority',
      params: params,
    });
  }
  /**
   * 删除身份
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteIdentity(params: model.IdModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'DeleteIdentity',
      params: params,
    });
  }
  /**
   * 删除用户
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteTarget(params: model.IdModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'DeleteTarget',
      params: params,
    });
  }
  /**
   * 更新权限
   * @param {model.AuthorityModel} params 请求参数
   * @returns {model.ResultType<schema.XAuthority>} 请求结果
   */
  public async updateAuthority(
    params: model.AuthorityModel,
  ): Promise<model.ResultType<schema.XAuthority>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'UpdateAuthority',
      params: params,
    });
  }
  /**
   * 更新身份
   * @param {model.IdentityModel} params 请求参数
   * @returns {model.ResultType<schema.XIdentity>} 请求结果
   */
  public async updateIdentity(
    params: model.IdentityModel,
  ): Promise<model.ResultType<schema.XIdentity>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'UpdateIdentity',
      params: params,
    });
  }
  /**
   * 更新用户
   * @param {model.TargetModel} params 请求参数
   * @returns {model.ResultType<schema.XTarget>} 请求结果
   */
  public async updateTarget(
    params: model.TargetModel,
  ): Promise<model.ResultType<schema.XTarget>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'UpdateTarget',
      params: params,
    });
  }
  /**
   * 分配身份
   * @param {model.GiveModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async giveIdentity(params: model.GiveModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'GiveIdentity',
      params: params,
    });
  }
  /**
   * 移除身份
   * @param {model.GiveModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async removeIdentity(
    params: model.GiveModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'RemoveIdentity',
      params: params,
    });
  }
  /**
   * 申请加入用户
   * @param {model.GainModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async applyJoinTeam(
    params: model.GainModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'ApplyJoinTeam',
      params: params,
    });
  }
  /**
   * 加入用户申请审批
   * @param {model.ApprovalModel} params 请求参数
   * @returns {model.ResultType<schema.XRelation>} 请求结果
   */
  public async joinTeamApproval(
    params: model.ApprovalModel,
  ): Promise<model.ResultType<schema.XRelation>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'JoinTeamApproval',
      params: params,
    });
  }
  /**
   * 拉入用户的团队
   * @param {model.GiveModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async pullAnyToTeam(
    params: model.GiveModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'PullAnyToTeam',
      params: params,
    });
  }
  /**
   * 取消申请加入用户
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async cancelJoinTeam(params: model.IdModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'CancelJoinTeam',
      params: params,
    });
  }
  /**
   * 移除或退出用户的团队
   * @param {model.GainModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async removeOrExitOfTeam(
    params: model.GainModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'RemoveOrExitOfTeam',
      params: params,
    });
  }
  /**
   * 根据ID查询用户信息
   * @param {model.IdArrayModel} params 请求参数
   * @returns {model.ResultType<schema.XTargetArray>} 请求结果
   */
  public async queryTargetById(
    params: model.IdArrayModel,
  ): Promise<model.ResultType<schema.XTargetArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryTargetById',
      params: params,
    });
  }
  /**
   * 模糊查找用户
   * @param {model.SearchModel} params 请求参数
   * @returns {model.ResultType<schema.XTargetArray>} 请求结果
   */
  public async searchTargets(
    params: model.SearchModel,
  ): Promise<model.ResultType<schema.XTargetArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'SearchTargets',
      params: params,
    });
  }
  /**
   * 根据ID查询子用户
   * @param {model.GetSubsModel} params 请求参数
   * @returns {model.ResultType<schema.XTargetArray>} 请求结果
   */
  public async querySubTargetById(
    params: model.GetSubsModel,
  ): Promise<model.ResultType<schema.XTargetArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QuerySubTargetById',
      params: params,
    });
  }
  /**
   * 查询用户加入的用户
   * @param {model.GetJoinedModel} params 请求参数
   * @returns {model.ResultType<schema.XTargetArray>} 请求结果
   */
  public async queryJoinedTargetById(
    params: model.GetJoinedModel,
  ): Promise<model.ResultType<schema.XTargetArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryJoinedTargetById',
      params: params,
    }, { isPage: true } as PageRequestMeta);
  }
  /**
   * 查询加入用户申请
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XRelationArray>} 请求结果
   */
  public async queryJoinTeamApply(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XRelationArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryJoinTeamApply',
      params: params,
    });
  }
  /**
   * 查询用户加入审批
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XRelationArray>} 请求结果
   */
  public async queryTeamJoinApproval(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XRelationArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryTeamJoinApproval',
      params: params,
    });
  }
  /**
   * 查询组织权限树
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XAuthority>} 请求结果
   */
  public async queryAuthorityTree(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XAuthority>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryAuthorityTree',
      params: params,
    });
  }
  /**
   * 查询拥有权限的成员
   * @param {model.GainModel} params 请求参数
   * @returns {model.ResultType<schema.XTargetArray>} 请求结果
   */
  public async queryAuthorityTargets(
    params: model.GainModel,
  ): Promise<model.ResultType<schema.XTargetArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryAuthorityTargets',
      params: params,
    });
  }
  /**
   * 查询组织身份
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XIdentityArray>} 请求结果
   */
  public async queryTargetIdentitys(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XIdentityArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryTargetIdentitys',
      params: params,
    });
  }
  /**
   * 查询赋予身份的用户
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XTargetArray>} 请求结果
   */
  public async queryIdentityTargets(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XTargetArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryIdentityTargets',
      params: params,
    });
  }
  /**
   * 查询在当前空间拥有权限的组织
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XTargetArray>} 请求结果
   */
  public async queryTargetsByAuthority(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XTargetArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryTargetsByAuthority',
      params: params,
    });
  }
  /**
   * 查询赋予的身份
   * @returns {model.ResultType<schema.XIdProofArray>} 请求结果
   */
  public async queryGivenIdentities(): Promise<model.ResultType<schema.XIdProofArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryGivedIdentitys',
      params: {},
    });
  }
  /**
   * 查询组织身份集
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XIdentityArray>} 请求结果
   */
  public async queryTeamIdentitys(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XIdentityArray>> {
    return await this.client.requestKernel({
      module: 'target',
      action: 'QueryTeamIdentitys',
      params: params,
    });
  }
  /**
   * 创建即时消息
   * @param {model.MsgSendModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async createImMsg(
    params: model.MsgSendModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'chat',
      action: 'CreateImMsg',
      params: params,
    });
  }
  /**
   * 消息撤回
   * @param {model.MsgSaveModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async recallImMsg(
    params: model.MsgSaveModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'chat',
      action: 'RecallImMsg',
      params: params,
    });
  }
  /**
   * 标记消息
   * @param {model.MsgTagModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async tagImMsg(params: model.MsgTagModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'chat',
      action: 'TagImMsg',
      params: params,
    });
  }
  /**
   * 创建元属性
   * @param {model.PropertyModel} params 请求参数
   * @returns {model.ResultType<schema.XProperty>} 请求结果
   */
  public async createProperty(
    params: model.PropertyModel,
  ): Promise<model.ResultType<schema.XProperty>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'CreateProperty',
      params: params,
    });
  }
  /**
   * 创建字典类型
   * @param {model.DictModel} params 请求参数
   * @returns {model.ResultType<schema.XDict>} 请求结果
   */
  public async createDict(
    params: model.DictModel,
  ): Promise<model.ResultType<schema.XDict>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'CreateDict',
      params: params,
    });
  }
  /**
   * 创建字典项
   * @param {model.DictItemModel} params 请求参数
   * @returns {model.ResultType<schema.XDictItem>} 请求结果
   */
  public async createDictItem(
    params: model.DictItemModel,
  ): Promise<model.ResultType<schema.XDictItem>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'CreateDictItem',
      params: params,
    });
  }
  /**
   * 创建分类
   * @param {model.SpeciesModel} params 请求参数
   * @returns {model.ResultType<schema.XSpecies>} 请求结果
   */
  public async createSpecies(
    params: model.SpeciesModel,
  ): Promise<model.ResultType<schema.XSpecies>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'CreateSpecies',
      params: params,
    });
  }
  /**
   * 创建特性
   * @param {model.AttributeModel} params 请求参数
   * @returns {model.ResultType<schema.XAttribute>} 请求结果
   */
  public async createAttribute(
    params: model.AttributeModel,
  ): Promise<model.ResultType<schema.XAttribute>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'CreateAttribute',
      params: params,
    });
  }
  /**
   * 创建表单
   * @param {model.FormModel} params 请求参数
   * @returns {model.ResultType<schema.XForm>} 请求结果
   */
  public async createForm(
    params: model.FormModel,
  ): Promise<model.ResultType<schema.XForm>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'CreateForm',
      params: params,
    });
  }
  /**
   * 创建物
   * @param {model.ThingModel} params 请求参数
   * @returns {model.ResultType<schema.XThing>} 请求结果
   */
  public async createThing(
    params: model.ThingModel,
  ): Promise<model.ResultType<schema.XThing>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'CreateThing',
      params: params,
    });
  }
  /**
   * 删除元属性
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteProperty(params: model.IdModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'DeleteProperty',
      params: params,
    });
  }
  /**
   * 删除字典类型
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteDict(params: model.IdModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'DeleteDict',
      params: params,
    });
  }
  /**
   * 删除字典项
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteDictItem(params: model.IdModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'DeleteDictItem',
      params: params,
    });
  }
  /**
   * 删除分类
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteSpecies(params: model.IdModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'DeleteSpecies',
      params: params,
    });
  }
  /**
   * 删除度量标准
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteAttribute(
    params: model.IdModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'DeleteAttribute',
      params: params,
    });
  }
  /**
   * 删除表单
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteForm(params: model.IdModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'DeleteForm',
      params: params,
    });
  }
  /**
   * 删除物
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteThing(params: model.IdModel): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'DeleteThing',
      params: params,
    });
  }
  /**
   * 更新元属性
   * @param {model.PropertyModel} params 请求参数
   * @returns {model.ResultType<schema.XProperty>} 请求结果
   */
  public async updateProperty(
    params: model.PropertyModel,
  ): Promise<model.ResultType<schema.XProperty>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'UpdateProperty',
      params: params,
    });
  }
  /**
   * 更新字典类型
   * @param {model.DictModel} params 请求参数
   * @returns {model.ResultType<schema.XDict>} 请求结果
   */
  public async updateDict(
    params: model.DictModel,
  ): Promise<model.ResultType<schema.XDict>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'UpdateDict',
      params: params,
    });
  }
  /**
   * 更新字典项
   * @param {model.DictItemModel} params 请求参数
   * @returns {model.ResultType<schema.XDictItem>} 请求结果
   */
  public async updateDictItem(
    params: model.DictItemModel,
  ): Promise<model.ResultType<schema.XDictItem>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'UpdateDictItem',
      params: params,
    });
  }
  /**
   * 更新分类
   * @param {model.SpeciesModel} params 请求参数
   * @returns {model.ResultType<schema.XSpecies>} 请求结果
   */
  public async updateSpecies(
    params: model.SpeciesModel,
  ): Promise<model.ResultType<schema.XSpecies>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'UpdateSpecies',
      params: params,
    });
  }
  /**
   * 更新度量标准
   * @param {model.AttributeModel} params 请求参数
   * @returns {model.ResultType<schema.XAttribute>} 请求结果
   */
  public async updateAttribute(
    params: model.AttributeModel,
  ): Promise<model.ResultType<schema.XAttribute>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'UpdateAttribute',
      params: params,
    });
  }
  /**
   * 更新表单
   * @param {model.FormModel} params 请求参数
   * @returns {model.ResultType<schema.XForm>} 请求结果
   */
  public async updateForm(
    params: model.FormModel,
  ): Promise<model.ResultType<schema.XForm>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'UpdateForm',
      params: params,
    });
  }
  /**
   * 更新物
   * @param {model.ThingModel} params 请求参数
   * @returns {model.ResultType<schema.XThing>} 请求结果
   */
  public async updateThing(
    params: model.ThingModel,
  ): Promise<model.ResultType<schema.XThing>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'UpdateThing',
      params: params,
    });
  }
  /**
   * 完善物的属性数据
   * @param {model.SetPropModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async thingSetProperty(
    params: model.SetPropModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'ThingSetProperty',
      params: params,
    });
  }
  /**
   * 查询用户属性集
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XPropertyArray>} 请求结果
   */
  public async queryPropertys(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XPropertyArray>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'QueryPropertys',
      params: params,
    });
  }
  /**
   * 查询用户字典集
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XDictArray>} 请求结果
   */
  public async queryDicts(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XDictArray>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'QueryDicts',
      params: params,
    });
  }
  /**
   * 查询字典项集
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XDictItemArray>} 请求结果
   */
  public async queryDictItems(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XDictItemArray>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'QueryDictItems',
      params: params,
    });
  }
  /**
   * 查询用户分类树
   * @param {model.GetSpeciesModel} params 请求参数
   * @returns {model.ResultType<schema.XSpeciesArray>} 请求结果
   */
  public async querySpeciesTree(
    params: model.GetSpeciesModel,
  ): Promise<model.ResultType<schema.XSpeciesArray>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'QuerySpeciesTree',
      params: params,
    });
  }
  /**
   * 查询分类的度量标准
   * @param {model.GetSpeciesResourceModel} params 请求参数
   * @returns {model.ResultType<schema.XAttributeArray>} 请求结果
   */
  public async querySpeciesAttrs(
    params: model.GetSpeciesResourceModel,
  ): Promise<model.ResultType<schema.XAttributeArray>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'QuerySpeciesAttrs',
      params: params,
    });
  }
  /**
   * 查询分类的表单
   * @param {model.GetSpeciesResourceModel} params 请求参数
   * @returns {model.ResultType<schema.XAttributeArray>} 请求结果
   */
  public async querySpeciesForms(
    params: model.GetSpeciesResourceModel,
  ): Promise<model.ResultType<schema.XFormArray>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'QuerySpeciesForms',
      params: params,
    });
  }
  /**
   * 物的属性值查询
   * @param {model.GiveModel} params 请求参数
   * @returns {model.ResultType<schema.XThingPropArray>} 请求结果
   */
  public async queryThingProperty(
    params: model.GiveModel,
  ): Promise<model.ResultType<schema.XThingPropArray>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'QueryThingProperty',
      params: params,
    });
  }
  /**
   * 物的属性历史值查询
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XThingPropHistroyArray>} 请求结果
   */
  public async queryPropertyHistroy(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XThingPropHistroyArray>> {
    return await this.client.requestKernel({
      module: 'thing',
      action: 'QueryPropertyHistroy',
      params: params,
    });
  }
  /**
   * 创建订单:商品直接购买
   * @param {model.OrderModel} params 请求参数
   * @returns {model.ResultType<schema.XOrder>} 请求结果
   */
  public async createOrder(
    params: model.OrderModel,
  ): Promise<model.ResultType<schema.XOrder>> {
    return await this.client.requestKernel({
      module: 'order',
      action: 'CreateOrder',
      params: params,
    });
  }
  /**
   * 创建订单支付
   * @param {model.OrderPayModel} params 请求参数
   * @returns {model.ResultType<schema.XOrderPay>} 请求结果
   */
  public async createOrderPay(
    params: model.OrderPayModel,
  ): Promise<model.ResultType<schema.XOrderPay>> {
    return await this.client.requestKernel({
      module: 'order',
      action: 'CreateOrderPay',
      params: params,
    });
  }
  /**
   * 查询订单集合
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XOrderArray>} 请求结果
   */
  public async queryOrders(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XOrderArray>> {
    return await this.client.requestKernel({
      module: 'order',
      action: 'QueryOrders',
      params: params,
    });
  }
  /**
   * 取消订单
   * @param {model.ApprovalModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async cancelOrder(
    params: model.ApprovalModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'order',
      action: 'CancelOrder',
      params: params,
    });
  }
  /**
   * 创建办事定义
   * @param {model.WorkDefineModel} params 请求参数
   * @returns {model.ResultType<schema.XWorkDefine>} 请求结果
   */
  public async createWorkDefine(
    params: model.WorkDefineModel,
  ): Promise<model.ResultType<schema.XWorkDefine>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'CreateWorkDefine',
      params: params,
    });
  }
  /**
   * 创建办事实例(启动办事)
   * @param {model.WorkInstanceModel} params 请求参数
   * @returns {model.ResultType<schema.XWorkInstance>} 请求结果
   */
  public async createWorkInstance(
    params: model.WorkInstanceModel,
  ): Promise<model.ResultType<schema.XWorkInstance>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'CreateWorkInstance',
      params: params,
    });
  }
  /**
   * 删除办事定义
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async deleteWorkDefine(
    params: model.IdModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'DeleteWorkDefine',
      params: params,
    });
  }
  /**
   * 删除办事实例(发起人撤回)
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async recallWorkInstance(
    params: model.IdModel,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'RecallWorkInstance',
      params: params,
    });
  }
  /**
   * 查询办事定义
   * @param {model.GetSpeciesResourceModel} params 请求参数
   * @returns {model.ResultType<schema.XWorkDefineArray>} 请求结果
   */
  public async queryWorkDefine(
    params: model.GetSpeciesResourceModel,
  ): Promise<model.ResultType<schema.XWorkDefineArray>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'QueryWorkDefine',
      params: params,
    });
  }
  /**
   * 查询办事节点
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.WorkNodeModel>} 请求结果
   */
  public async queryWorkNodes(
    params: model.IdModel,
  ): Promise<model.ResultType<model.WorkNodeModel>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'QueryWorkNodes',
      params: params,
    });
  }
  /**
   * 查询待审批任务、抄送
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XWorkTaskHistoryArray>} 请求结果
   */
  public async queryApproveTask(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XWorkRecordArray>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'QueryApproveTask',
      params: params,
    });
  }
  /**
   * 查询审批记录
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XWorkRecordArray>} 请求结果
   */
  public async queryWorkRecord(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XWorkRecordArray>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'QueryWorkRecord',
      params: params,
    });
  }
  /**
   * 办事节点审批
   * @param {model.ApprovalTaskReq} params 请求参数
   * @returns {model.ResultType<boolean>} 请求结果
   */
  public async approvalTask(
    params: model.ApprovalTaskReq,
  ): Promise<model.ResultType<boolean>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'ApprovalTask',
      params: params,
    });
  }
  /**
   * 查询办事实例
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XWorkInstance>} 请求结果
   */
  public async queryWorkInstanceById(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XWorkInstance>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'QueryWorkInstanceById',
      params: params,
    });
  }
  /**
   * 查询发起的办事
   * @param {model.IdModel} params 请求参数
   * @returns {model.ResultType<schema.XWorkInstanceArray>} 请求结果
   */
  public async queryMyWorkInstance(
    params: model.IdModel,
  ): Promise<model.ResultType<schema.XWorkInstanceArray>> {
    return await this.client.requestKernel({
      module: 'work',
      action: 'QueryMyWorkInstance',
      params: params,
    });
  }

}
