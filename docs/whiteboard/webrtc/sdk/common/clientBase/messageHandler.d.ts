import { SocketCenter } from "./socketCenter";
import { StateCenter } from "./stateCenter";
import { ChatInfo, ERRO, MessageInfo } from "../zego.entity";
import { Logger } from "../zego.logger";
export declare class MessageHandler {
    private logger;
    private socketCenter;
    private stateCenter;
    constructor(logger: Logger, stateCenter: StateCenter, socketCenter: SocketCenter);
    sendCustomCommand(dstMembers: string[], customContent: string | Object, success: (seq: number, customContent: string) => void, error: (err: ERRO, seq: number, customContent: string) => void): boolean;
    private handleSendCustomMsgRsp;
    handlePushCustomMsg(msg: any): void;
    onRecvCustomCommand(from_userid: string, from_idname: string, custom_content: string): void;
    sendRoomMsg(msg_category: 1 | 2, msg_type: 1 | 2 | 3, msg_content: any, success: any, error: any): void;
    handleSendRoomMsgRsp(msg: any): void;
    onRecvRoomMsg(chat_data: ChatInfo[], server_msg_id: number, ret_msg_id: number): void;
    sendReliableMessage(type: string, data: string, success: (seq: number) => void, error: (err: ERRO, seq: number) => void): void;
    sendBigRoomMessage(category: 1 | 2, type: 1 | 2 | 3, content: string, success: (seq: number, messageId: string) => void, error: (err: ERRO, seq: number) => void): void;
    handlePushMergeMsg(msg: any): void;
    handlePushBigRooMsg(bodyString: any): void;
    onRecvBigRoomMessage(messageList: MessageInfo[], roomId: string): void;
    sendBigRoomMessageInternal(msgs: any, success: any, error: any): void;
    handleBigImMsgRsp(msg: any): void;
    setBigImTimer(offset: number, timeWindow: number): void;
    onBigImTimer(): void;
    sendRelayMessage(type: string, data: string, success: (seq: number) => void, error: (err: ERRO, seq: number) => void): void;
    sendRelayMessageInternal(type: any, data: any, success: any, error: any): void;
    setRelayTimer(offset: number, timeWindow: number): void;
    onRelayTimer(): void;
    handlePushTransMsg(msg: any): void;
    onRecvReliableMessage(type: string, seq: number, data: String): void;
}
