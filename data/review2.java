// ORM class for table 'review2'
// WARNING: This class is AUTO-GENERATED. Modify at your own risk.
//
// Debug information:
// Generated date: Wed Sep 21 05:04:27 UTC 2022
// For connector: org.apache.sqoop.manager.MySQLManager
import org.apache.hadoop.io.BytesWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.Writable;
import org.apache.hadoop.mapred.lib.db.DBWritable;
import com.cloudera.sqoop.lib.JdbcWritableBridge;
import com.cloudera.sqoop.lib.DelimiterSet;
import com.cloudera.sqoop.lib.FieldFormatter;
import com.cloudera.sqoop.lib.RecordParser;
import com.cloudera.sqoop.lib.BooleanParser;
import com.cloudera.sqoop.lib.BlobRef;
import com.cloudera.sqoop.lib.ClobRef;
import com.cloudera.sqoop.lib.LargeObjectLoader;
import com.cloudera.sqoop.lib.SqoopRecord;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class review2 extends SqoopRecord  implements DBWritable, Writable {
  private final int PROTOCOL_VERSION = 3;
  public int getClassFormatVersion() { return PROTOCOL_VERSION; }
  public static interface FieldSetterCommand {    void setField(Object value);  }  protected ResultSet __cur_result_set;
  private Map<String, FieldSetterCommand> setters = new HashMap<String, FieldSetterCommand>();
  private void init0() {
    setters.put("reviewIndex", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.reviewIndex = (Long)value;
      }
    });
    setters.put("memberIndex", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.memberIndex = (Long)value;
      }
    });
    setters.put("drinkIndex", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.drinkIndex = (Long)value;
      }
    });
    setters.put("createdAt", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.createdAt = (java.sql.Timestamp)value;
      }
    });
    setters.put("updatedAt", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.updatedAt = (java.sql.Timestamp)value;
      }
    });
    setters.put("weekday", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.weekday = (String)value;
      }
    });
    setters.put("memberId", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.memberId = (String)value;
      }
    });
    setters.put("age", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.age = (Integer)value;
      }
    });
    setters.put("gender", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.gender = (String)value;
      }
    });
    setters.put("score", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.score = (Integer)value;
      }
    });
    setters.put("review", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.review = (String)value;
      }
    });
    setters.put("isCrawled", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        review2.this.isCrawled = (Boolean)value;
      }
    });
  }
  public review2() {
    init0();
  }
  private Long reviewIndex;
  public Long get_reviewIndex() {
    return reviewIndex;
  }
  public void set_reviewIndex(Long reviewIndex) {
    this.reviewIndex = reviewIndex;
  }
  public review2 with_reviewIndex(Long reviewIndex) {
    this.reviewIndex = reviewIndex;
    return this;
  }
  private Long memberIndex;
  public Long get_memberIndex() {
    return memberIndex;
  }
  public void set_memberIndex(Long memberIndex) {
    this.memberIndex = memberIndex;
  }
  public review2 with_memberIndex(Long memberIndex) {
    this.memberIndex = memberIndex;
    return this;
  }
  private Long drinkIndex;
  public Long get_drinkIndex() {
    return drinkIndex;
  }
  public void set_drinkIndex(Long drinkIndex) {
    this.drinkIndex = drinkIndex;
  }
  public review2 with_drinkIndex(Long drinkIndex) {
    this.drinkIndex = drinkIndex;
    return this;
  }
  private java.sql.Timestamp createdAt;
  public java.sql.Timestamp get_createdAt() {
    return createdAt;
  }
  public void set_createdAt(java.sql.Timestamp createdAt) {
    this.createdAt = createdAt;
  }
  public review2 with_createdAt(java.sql.Timestamp createdAt) {
    this.createdAt = createdAt;
    return this;
  }
  private java.sql.Timestamp updatedAt;
  public java.sql.Timestamp get_updatedAt() {
    return updatedAt;
  }
  public void set_updatedAt(java.sql.Timestamp updatedAt) {
    this.updatedAt = updatedAt;
  }
  public review2 with_updatedAt(java.sql.Timestamp updatedAt) {
    this.updatedAt = updatedAt;
    return this;
  }
  private String weekday;
  public String get_weekday() {
    return weekday;
  }
  public void set_weekday(String weekday) {
    this.weekday = weekday;
  }
  public review2 with_weekday(String weekday) {
    this.weekday = weekday;
    return this;
  }
  private String memberId;
  public String get_memberId() {
    return memberId;
  }
  public void set_memberId(String memberId) {
    this.memberId = memberId;
  }
  public review2 with_memberId(String memberId) {
    this.memberId = memberId;
    return this;
  }
  private Integer age;
  public Integer get_age() {
    return age;
  }
  public void set_age(Integer age) {
    this.age = age;
  }
  public review2 with_age(Integer age) {
    this.age = age;
    return this;
  }
  private String gender;
  public String get_gender() {
    return gender;
  }
  public void set_gender(String gender) {
    this.gender = gender;
  }
  public review2 with_gender(String gender) {
    this.gender = gender;
    return this;
  }
  private Integer score;
  public Integer get_score() {
    return score;
  }
  public void set_score(Integer score) {
    this.score = score;
  }
  public review2 with_score(Integer score) {
    this.score = score;
    return this;
  }
  private String review;
  public String get_review() {
    return review;
  }
  public void set_review(String review) {
    this.review = review;
  }
  public review2 with_review(String review) {
    this.review = review;
    return this;
  }
  private Boolean isCrawled;
  public Boolean get_isCrawled() {
    return isCrawled;
  }
  public void set_isCrawled(Boolean isCrawled) {
    this.isCrawled = isCrawled;
  }
  public review2 with_isCrawled(Boolean isCrawled) {
    this.isCrawled = isCrawled;
    return this;
  }
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof review2)) {
      return false;
    }
    review2 that = (review2) o;
    boolean equal = true;
    equal = equal && (this.reviewIndex == null ? that.reviewIndex == null : this.reviewIndex.equals(that.reviewIndex));
    equal = equal && (this.memberIndex == null ? that.memberIndex == null : this.memberIndex.equals(that.memberIndex));
    equal = equal && (this.drinkIndex == null ? that.drinkIndex == null : this.drinkIndex.equals(that.drinkIndex));
    equal = equal && (this.createdAt == null ? that.createdAt == null : this.createdAt.equals(that.createdAt));
    equal = equal && (this.updatedAt == null ? that.updatedAt == null : this.updatedAt.equals(that.updatedAt));
    equal = equal && (this.weekday == null ? that.weekday == null : this.weekday.equals(that.weekday));
    equal = equal && (this.memberId == null ? that.memberId == null : this.memberId.equals(that.memberId));
    equal = equal && (this.age == null ? that.age == null : this.age.equals(that.age));
    equal = equal && (this.gender == null ? that.gender == null : this.gender.equals(that.gender));
    equal = equal && (this.score == null ? that.score == null : this.score.equals(that.score));
    equal = equal && (this.review == null ? that.review == null : this.review.equals(that.review));
    equal = equal && (this.isCrawled == null ? that.isCrawled == null : this.isCrawled.equals(that.isCrawled));
    return equal;
  }
  public boolean equals0(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof review2)) {
      return false;
    }
    review2 that = (review2) o;
    boolean equal = true;
    equal = equal && (this.reviewIndex == null ? that.reviewIndex == null : this.reviewIndex.equals(that.reviewIndex));
    equal = equal && (this.memberIndex == null ? that.memberIndex == null : this.memberIndex.equals(that.memberIndex));
    equal = equal && (this.drinkIndex == null ? that.drinkIndex == null : this.drinkIndex.equals(that.drinkIndex));
    equal = equal && (this.createdAt == null ? that.createdAt == null : this.createdAt.equals(that.createdAt));
    equal = equal && (this.updatedAt == null ? that.updatedAt == null : this.updatedAt.equals(that.updatedAt));
    equal = equal && (this.weekday == null ? that.weekday == null : this.weekday.equals(that.weekday));
    equal = equal && (this.memberId == null ? that.memberId == null : this.memberId.equals(that.memberId));
    equal = equal && (this.age == null ? that.age == null : this.age.equals(that.age));
    equal = equal && (this.gender == null ? that.gender == null : this.gender.equals(that.gender));
    equal = equal && (this.score == null ? that.score == null : this.score.equals(that.score));
    equal = equal && (this.review == null ? that.review == null : this.review.equals(that.review));
    equal = equal && (this.isCrawled == null ? that.isCrawled == null : this.isCrawled.equals(that.isCrawled));
    return equal;
  }
  public void readFields(ResultSet __dbResults) throws SQLException {
    this.__cur_result_set = __dbResults;
    this.reviewIndex = JdbcWritableBridge.readLong(1, __dbResults);
    this.memberIndex = JdbcWritableBridge.readLong(2, __dbResults);
    this.drinkIndex = JdbcWritableBridge.readLong(3, __dbResults);
    this.createdAt = JdbcWritableBridge.readTimestamp(4, __dbResults);
    this.updatedAt = JdbcWritableBridge.readTimestamp(5, __dbResults);
    this.weekday = JdbcWritableBridge.readString(6, __dbResults);
    this.memberId = JdbcWritableBridge.readString(7, __dbResults);
    this.age = JdbcWritableBridge.readInteger(8, __dbResults);
    this.gender = JdbcWritableBridge.readString(9, __dbResults);
    this.score = JdbcWritableBridge.readInteger(10, __dbResults);
    this.review = JdbcWritableBridge.readString(11, __dbResults);
    this.isCrawled = JdbcWritableBridge.readBoolean(12, __dbResults);
  }
  public void readFields0(ResultSet __dbResults) throws SQLException {
    this.reviewIndex = JdbcWritableBridge.readLong(1, __dbResults);
    this.memberIndex = JdbcWritableBridge.readLong(2, __dbResults);
    this.drinkIndex = JdbcWritableBridge.readLong(3, __dbResults);
    this.createdAt = JdbcWritableBridge.readTimestamp(4, __dbResults);
    this.updatedAt = JdbcWritableBridge.readTimestamp(5, __dbResults);
    this.weekday = JdbcWritableBridge.readString(6, __dbResults);
    this.memberId = JdbcWritableBridge.readString(7, __dbResults);
    this.age = JdbcWritableBridge.readInteger(8, __dbResults);
    this.gender = JdbcWritableBridge.readString(9, __dbResults);
    this.score = JdbcWritableBridge.readInteger(10, __dbResults);
    this.review = JdbcWritableBridge.readString(11, __dbResults);
    this.isCrawled = JdbcWritableBridge.readBoolean(12, __dbResults);
  }
  public void loadLargeObjects(LargeObjectLoader __loader)
      throws SQLException, IOException, InterruptedException {
  }
  public void loadLargeObjects0(LargeObjectLoader __loader)
      throws SQLException, IOException, InterruptedException {
  }
  public void write(PreparedStatement __dbStmt) throws SQLException {
    write(__dbStmt, 0);
  }

  public int write(PreparedStatement __dbStmt, int __off) throws SQLException {
    JdbcWritableBridge.writeLong(reviewIndex, 1 + __off, -5, __dbStmt);
    JdbcWritableBridge.writeLong(memberIndex, 2 + __off, -5, __dbStmt);
    JdbcWritableBridge.writeLong(drinkIndex, 3 + __off, -5, __dbStmt);
    JdbcWritableBridge.writeTimestamp(createdAt, 4 + __off, 93, __dbStmt);
    JdbcWritableBridge.writeTimestamp(updatedAt, 5 + __off, 93, __dbStmt);
    JdbcWritableBridge.writeString(weekday, 6 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(memberId, 7 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(age, 8 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(gender, 9 + __off, 1, __dbStmt);
    JdbcWritableBridge.writeInteger(score, 10 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(review, 11 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeBoolean(isCrawled, 12 + __off, -7, __dbStmt);
    return 12;
  }
  public void write0(PreparedStatement __dbStmt, int __off) throws SQLException {
    JdbcWritableBridge.writeLong(reviewIndex, 1 + __off, -5, __dbStmt);
    JdbcWritableBridge.writeLong(memberIndex, 2 + __off, -5, __dbStmt);
    JdbcWritableBridge.writeLong(drinkIndex, 3 + __off, -5, __dbStmt);
    JdbcWritableBridge.writeTimestamp(createdAt, 4 + __off, 93, __dbStmt);
    JdbcWritableBridge.writeTimestamp(updatedAt, 5 + __off, 93, __dbStmt);
    JdbcWritableBridge.writeString(weekday, 6 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(memberId, 7 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(age, 8 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(gender, 9 + __off, 1, __dbStmt);
    JdbcWritableBridge.writeInteger(score, 10 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(review, 11 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeBoolean(isCrawled, 12 + __off, -7, __dbStmt);
  }
  public void readFields(DataInput __dataIn) throws IOException {
this.readFields0(__dataIn);  }
  public void readFields0(DataInput __dataIn) throws IOException {
    if (__dataIn.readBoolean()) { 
        this.reviewIndex = null;
    } else {
    this.reviewIndex = Long.valueOf(__dataIn.readLong());
    }
    if (__dataIn.readBoolean()) { 
        this.memberIndex = null;
    } else {
    this.memberIndex = Long.valueOf(__dataIn.readLong());
    }
    if (__dataIn.readBoolean()) { 
        this.drinkIndex = null;
    } else {
    this.drinkIndex = Long.valueOf(__dataIn.readLong());
    }
    if (__dataIn.readBoolean()) { 
        this.createdAt = null;
    } else {
    this.createdAt = new Timestamp(__dataIn.readLong());
    this.createdAt.setNanos(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.updatedAt = null;
    } else {
    this.updatedAt = new Timestamp(__dataIn.readLong());
    this.updatedAt.setNanos(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.weekday = null;
    } else {
    this.weekday = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.memberId = null;
    } else {
    this.memberId = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.age = null;
    } else {
    this.age = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.gender = null;
    } else {
    this.gender = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.score = null;
    } else {
    this.score = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.review = null;
    } else {
    this.review = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.isCrawled = null;
    } else {
    this.isCrawled = Boolean.valueOf(__dataIn.readBoolean());
    }
  }
  public void write(DataOutput __dataOut) throws IOException {
    if (null == this.reviewIndex) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.reviewIndex);
    }
    if (null == this.memberIndex) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.memberIndex);
    }
    if (null == this.drinkIndex) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.drinkIndex);
    }
    if (null == this.createdAt) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.createdAt.getTime());
    __dataOut.writeInt(this.createdAt.getNanos());
    }
    if (null == this.updatedAt) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.updatedAt.getTime());
    __dataOut.writeInt(this.updatedAt.getNanos());
    }
    if (null == this.weekday) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, weekday);
    }
    if (null == this.memberId) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, memberId);
    }
    if (null == this.age) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.age);
    }
    if (null == this.gender) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, gender);
    }
    if (null == this.score) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.score);
    }
    if (null == this.review) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, review);
    }
    if (null == this.isCrawled) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeBoolean(this.isCrawled);
    }
  }
  public void write0(DataOutput __dataOut) throws IOException {
    if (null == this.reviewIndex) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.reviewIndex);
    }
    if (null == this.memberIndex) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.memberIndex);
    }
    if (null == this.drinkIndex) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.drinkIndex);
    }
    if (null == this.createdAt) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.createdAt.getTime());
    __dataOut.writeInt(this.createdAt.getNanos());
    }
    if (null == this.updatedAt) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.updatedAt.getTime());
    __dataOut.writeInt(this.updatedAt.getNanos());
    }
    if (null == this.weekday) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, weekday);
    }
    if (null == this.memberId) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, memberId);
    }
    if (null == this.age) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.age);
    }
    if (null == this.gender) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, gender);
    }
    if (null == this.score) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.score);
    }
    if (null == this.review) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, review);
    }
    if (null == this.isCrawled) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeBoolean(this.isCrawled);
    }
  }
  private static final DelimiterSet __outputDelimiters = new DelimiterSet((char) 44, (char) 10, (char) 0, (char) 0, false);
  public String toString() {
    return toString(__outputDelimiters, true);
  }
  public String toString(DelimiterSet delimiters) {
    return toString(delimiters, true);
  }
  public String toString(boolean useRecordDelim) {
    return toString(__outputDelimiters, useRecordDelim);
  }
  public String toString(DelimiterSet delimiters, boolean useRecordDelim) {
    StringBuilder __sb = new StringBuilder();
    char fieldDelim = delimiters.getFieldsTerminatedBy();
    __sb.append(FieldFormatter.escapeAndEnclose(reviewIndex==null?"null":"" + reviewIndex, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(memberIndex==null?"null":"" + memberIndex, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(drinkIndex==null?"null":"" + drinkIndex, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(createdAt==null?"null":"" + createdAt, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(updatedAt==null?"null":"" + updatedAt, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(weekday==null?"null":weekday, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(memberId==null?"null":memberId, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(age==null?"null":"" + age, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(gender==null?"null":gender, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(score==null?"null":"" + score, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(review==null?"null":review, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(isCrawled==null?"null":"" + isCrawled, delimiters));
    if (useRecordDelim) {
      __sb.append(delimiters.getLinesTerminatedBy());
    }
    return __sb.toString();
  }
  public void toString0(DelimiterSet delimiters, StringBuilder __sb, char fieldDelim) {
    __sb.append(FieldFormatter.escapeAndEnclose(reviewIndex==null?"null":"" + reviewIndex, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(memberIndex==null?"null":"" + memberIndex, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(drinkIndex==null?"null":"" + drinkIndex, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(createdAt==null?"null":"" + createdAt, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(updatedAt==null?"null":"" + updatedAt, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(weekday==null?"null":weekday, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(memberId==null?"null":memberId, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(age==null?"null":"" + age, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(gender==null?"null":gender, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(score==null?"null":"" + score, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(review==null?"null":review, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(isCrawled==null?"null":"" + isCrawled, delimiters));
  }
  private static final DelimiterSet __inputDelimiters = new DelimiterSet((char) 44, (char) 10, (char) 0, (char) 0, false);
  private RecordParser __parser;
  public void parse(Text __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(CharSequence __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(byte [] __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(char [] __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(ByteBuffer __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(CharBuffer __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  private void __loadFromFields(List<String> fields) {
    Iterator<String> __it = fields.listIterator();
    String __cur_str = null;
    try {
    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.reviewIndex = null; } else {
      this.reviewIndex = Long.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.memberIndex = null; } else {
      this.memberIndex = Long.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.drinkIndex = null; } else {
      this.drinkIndex = Long.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.createdAt = null; } else {
      this.createdAt = java.sql.Timestamp.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.updatedAt = null; } else {
      this.updatedAt = java.sql.Timestamp.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.weekday = null; } else {
      this.weekday = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.memberId = null; } else {
      this.memberId = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.age = null; } else {
      this.age = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.gender = null; } else {
      this.gender = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.score = null; } else {
      this.score = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.review = null; } else {
      this.review = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.isCrawled = null; } else {
      this.isCrawled = BooleanParser.valueOf(__cur_str);
    }

    } catch (RuntimeException e) {    throw new RuntimeException("Can't parse input data: '" + __cur_str + "'", e);    }  }

  private void __loadFromFields0(Iterator<String> __it) {
    String __cur_str = null;
    try {
    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.reviewIndex = null; } else {
      this.reviewIndex = Long.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.memberIndex = null; } else {
      this.memberIndex = Long.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.drinkIndex = null; } else {
      this.drinkIndex = Long.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.createdAt = null; } else {
      this.createdAt = java.sql.Timestamp.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.updatedAt = null; } else {
      this.updatedAt = java.sql.Timestamp.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.weekday = null; } else {
      this.weekday = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.memberId = null; } else {
      this.memberId = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.age = null; } else {
      this.age = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.gender = null; } else {
      this.gender = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.score = null; } else {
      this.score = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.review = null; } else {
      this.review = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.isCrawled = null; } else {
      this.isCrawled = BooleanParser.valueOf(__cur_str);
    }

    } catch (RuntimeException e) {    throw new RuntimeException("Can't parse input data: '" + __cur_str + "'", e);    }  }

  public Object clone() throws CloneNotSupportedException {
    review2 o = (review2) super.clone();
    o.createdAt = (o.createdAt != null) ? (java.sql.Timestamp) o.createdAt.clone() : null;
    o.updatedAt = (o.updatedAt != null) ? (java.sql.Timestamp) o.updatedAt.clone() : null;
    return o;
  }

  public void clone0(review2 o) throws CloneNotSupportedException {
    o.createdAt = (o.createdAt != null) ? (java.sql.Timestamp) o.createdAt.clone() : null;
    o.updatedAt = (o.updatedAt != null) ? (java.sql.Timestamp) o.updatedAt.clone() : null;
  }

  public Map<String, Object> getFieldMap() {
    Map<String, Object> __sqoop$field_map = new HashMap<String, Object>();
    __sqoop$field_map.put("reviewIndex", this.reviewIndex);
    __sqoop$field_map.put("memberIndex", this.memberIndex);
    __sqoop$field_map.put("drinkIndex", this.drinkIndex);
    __sqoop$field_map.put("createdAt", this.createdAt);
    __sqoop$field_map.put("updatedAt", this.updatedAt);
    __sqoop$field_map.put("weekday", this.weekday);
    __sqoop$field_map.put("memberId", this.memberId);
    __sqoop$field_map.put("age", this.age);
    __sqoop$field_map.put("gender", this.gender);
    __sqoop$field_map.put("score", this.score);
    __sqoop$field_map.put("review", this.review);
    __sqoop$field_map.put("isCrawled", this.isCrawled);
    return __sqoop$field_map;
  }

  public void getFieldMap0(Map<String, Object> __sqoop$field_map) {
    __sqoop$field_map.put("reviewIndex", this.reviewIndex);
    __sqoop$field_map.put("memberIndex", this.memberIndex);
    __sqoop$field_map.put("drinkIndex", this.drinkIndex);
    __sqoop$field_map.put("createdAt", this.createdAt);
    __sqoop$field_map.put("updatedAt", this.updatedAt);
    __sqoop$field_map.put("weekday", this.weekday);
    __sqoop$field_map.put("memberId", this.memberId);
    __sqoop$field_map.put("age", this.age);
    __sqoop$field_map.put("gender", this.gender);
    __sqoop$field_map.put("score", this.score);
    __sqoop$field_map.put("review", this.review);
    __sqoop$field_map.put("isCrawled", this.isCrawled);
  }

  public void setField(String __fieldName, Object __fieldVal) {
    if (!setters.containsKey(__fieldName)) {
      throw new RuntimeException("No such field:"+__fieldName);
    }
    setters.get(__fieldName).setField(__fieldVal);
  }

}
