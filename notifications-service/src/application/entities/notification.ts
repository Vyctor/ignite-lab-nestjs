import { Content } from './content';
import { randomUUID } from 'crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt?: Date | null;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
    this.props.createdAt = new Date();
    this._id = randomUUID();
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get createdAt(): Date | null | undefined {
    return this.props.createdAt;
  }

  public get id(): string {
    return this._id;
  }
}
