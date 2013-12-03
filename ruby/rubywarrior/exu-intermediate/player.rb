class Player

  def initialize
    @dirs = [:left, :right, :forward, :backward]
  end

  def detector
    @enemy_at, @captive_at = {}, {}
    @dirs.each do |dir|
      @enemy_at[dir] = true if @warrior.feel(dir).enemy? and !@warrior.feel(dir).captive?
      @captive_at[dir] = true if @warrior.feel(dir).captive?
    end
  end

  def rest?
    if @warrior.health < 19 and !@warrior.feel(@dir).enemy?
      @warrior.rest!
      return true
    end

    return false
  end

  def attack
    if @enemy_at.count > 1
      @enemy_at.each do |dir, is|
        @warrior.bind! dir
        break
      end
    elsif @enemy_at.count == 1
      @warrior.attack! @dir
    elsif @captive_at.count > 0
      @captive_at.each do |dir, is|
        @warrior.rescue! dir
        break
      end
    end
  end

  def move?
    if @warrior.feel(@dir).empty? or @warrior.feel(@dir).stairs?
      @warrior.walk! @dir
      return true
    end

    return false
  end


  def play_turn(warrior)
    @warrior = warrior


    @warrior.listen.each do |o|
      # p " detected at "  + @warrior.direction_of(o).to_s 
    end

    # abort

    @dir = warrior.direction_of_stairs

    detector

    p @enemy_at
    attack if !move? if !rest?
  end
end
